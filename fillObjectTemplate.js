const Handlebars = require('handlebars');

function fillObjectTemplate(data) {
  const template = `
  --############ {{ObjectName}} Object ############
IF ((SELECT COUNT(1) FROM [udp].[ObjectInfo] WHERE [Name] = '{{ObjectName}}') = 0)
BEGIN
  INSERT INTO [udp].[ObjectInfo] ([DataSourceType], [Name], [IsGenerated], [Schema], [Properties], [NamespaceStructure], [SanitizedName])
  VALUES 
  ({{DataSourceType}}, '{{ObjectName}}', {{IsGenerated}}, '{{Schema}}', '{{Properties}}', '{
    "Controller": "{{controllerNamespaceStructure}}",
    "Service": "{{NameSpaceStructure}}",
    "Dao": "{{NameSpaceStructure}}",
    "Model": "{{NameSpaceStructure}}",
    "Interface": "{{NameSpaceStructure}}"
  }', 
  '{{SanitizedName}}')
END
`;

  const compiledTemplate = Handlebars.compile(template);
  console.log(data['Properties'])
  return compiledTemplate(data);
}

module.exports = fillObjectTemplate;

