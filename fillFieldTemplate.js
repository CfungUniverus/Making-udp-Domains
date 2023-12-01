const Handlebars = require('handlebars');

function fillFieldTemplate(data) {
  const template = `
  --############ {{ObjectName}} ObjectField  ############
  -- Get the Object Id and store in a variable
  DECLARE @{{fieldName}}Object NVARCHAR(100) = '{{ObjectName}}'
  DECLARE @{{fieldName}}ObjectId INT
  SET @{{fieldName}}ObjectId = (SELECT ID FROM [udp].[ObjectInfo] WHERE [Name] = @{{fieldName}}Object)
  
  -- Insert the Content field
  IF ((SELECT COUNT(1) FROM [udp].[ObjectFieldInfo] WHERE [Name] = '{{fieldName}}' AND [ObjectInfoID] = @{{fieldName}}ObjectId) = 0)
  BEGIN
      INSERT INTO [udp].[ObjectFieldInfo] ([ObjectInfoID], [IsGenerated], [Name], [DataType], [IsPrimaryKey], [IsIdentity], [Properties], [DataTypeNamespace], [IsUnique], [DefaultValue], [ExtendedProperties], [SanitizedName], [DatabaseDataType])
      VALUES 
      (@{{fieldName}}ObjectId, {{IsGenerated}}, '{{fieldName}}', '{{DataType}}', {{isPrimaryKey}}, {{isIdentity}}, '{{Properties}}', '{{dataTypeNameSpace}}', {{isUnique}}, '', NULL, '{{SanitizedfieldName}}', '{{dataBaseDataType}}')
  END
`;

  const compiledTemplate = Handlebars.compile(template);
  console.log(data['Properties'])
  return compiledTemplate(data);
}

module.exports = fillFieldTemplate;
