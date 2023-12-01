IF ((SELECT COUNT(1) FROM [udp].[ObjectInfo] WHERE [Name] = 'AiMessage') = 0)
BEGIN
	INSERT INTO [udp].[ObjectInfo] ([DataSourceType], [Name], [IsGenerated], [Schema], [Properties], [NamespaceStructure], [SanitizedName])
	VALUES 
	(2, 'AiMessage', 1, 'aigle', '{"IsConfig":false}', 
    '{
    "Controller": "Univerus.Unity.Crm.Domain",
    "Service": "Univerus.Unity.Crm.Domain",
    "Dao": "Univerus.Unity.Crm.Domain",
    "Model": "Univerus.Unity.Crm.Domain",
    "Interface": "Univerus.Unity.Crm.Domain"
    }'
    'AiMessage')
END
-- SQL Template --

-- Query Description: [Description of the query]

IF ((SELECT COUNT(1) FROM [udp].[ObjectInfo] WHERE [Name] = '{{ObjectName}}') = 0)
BEGIN
	INSERT INTO [udp].[ObjectInfo] ([DataSourceType], [Name], [IsGenerated], [Schema], [Properties], [NamespaceStructure], [SanitizedName])
	VALUES 
	({{DataSourceType}}, '{{ObjectName}}', {{IsGenerated}}, '{{Schema}}', '{{Properties}}', '{{NamespaceStructure}}', '{{SanitizedName}}')
END

-- Query Description: [Description of the query]

IF ((SELECT COUNT(1) FROM [udp].[ObjectInfo] WHERE [Name] = '{{ObjectName}}') = 0)
BEGIN
	INSERT INTO [udp].[ObjectInfo] ([DataSourceType], [Name], [IsGenerated], [Schema], [Properties], [NamespaceStructure], [SanitizedName])
	VALUES 
	({{DataSourceType}}, '{{ObjectName}}', {{IsGenerated}}, '{{Schema}}', '{{Properties}}', '{
	"Controller": "{{NameSpaceStructure}}",
	"Service": "{{NameSpaceStructure}}",
	"Dao": "{{NameSpaceStructure}}",
	"Model": "{{NameSpaceStructure}}",
	"Interface": "{{NameSpaceStructure}}"
	}', 
    '{{SanitizedName}}')
END
