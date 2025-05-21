curl "https://api.sandbox.layer1.com/digital/api-docs" | jq | sed 's/"openId": \[/"oauth2": \[/g' > digital.json

INPUT_FILE="digital.json"
BASE_PACKAGE="com.layer1.clients.digital"
GROUP_ID="com.layer1.clients"
ARTIFACT_ID="digital"

openapi-generator generate -i digital.json -g javascript -o . \
  --additional-properties hideGenerationTimestamp=true \
  --additional-properties groupId=${GROUP_ID} \
  --additional-properties artifactId=${ARTIFACT_ID} \
  --additional-properties invokerPackage=${BASE_PACKAGE}.invoker \
  --additional-properties apiPackage=${BASE_PACKAGE}.api \
  --additional-properties modelPackage=${BASE_PACKAGE}.model \
  --additional-properties enumUnknownDefaultCase=true \
  --additional-properties generateBuilders=true \
  --additional-properties useSingleRequestParameter=true \
  --additional-properties disallowAdditionalPropertiesIfNotPresent=false 

echo "digital.json" >> .gitignore

