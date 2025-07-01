# Manual Azure Deployment Steps

Since the automated scripts are having issues with PowerShell, here's a manual step-by-step approach:

## Step 1: Check if web app exists
```bash
az webapp show --resource-group momweb-rg --name moss-mom
```

## Step 2: Delete existing web app (if it exists)
```bash
az webapp delete --resource-group momweb-rg --name moss-mom
```

## Step 3: Create resource group
```bash
az group create --name momweb-rg --location "East US"
```

## Step 4: Create app service plan
```bash
az appservice plan create --name momweb-plan --resource-group momweb-rg --sku B1 --is-linux
```

## Step 5: Create web app
```bash
az webapp create --resource-group momweb-rg --plan momweb-plan --name moss-mom --runtime "NODE|20-lts"
```

## Step 6: Configure web app
```bash
az webapp config set --resource-group momweb-rg --name moss-mom --startup-file "node server.js"
az webapp config appsettings set --resource-group momweb-rg --name moss-mom --settings WEBSITE_NODE_DEFAULT_VERSION=20-lts
```

## Step 7: Build the application
```bash
npm run build
```

## Step 8: Create deployment package
```bash
mkdir -p .azure/deploy
cp -r .next/standalone/* .azure/deploy/
cp -r public .azure/deploy/
cp package.json .azure/deploy/
cp next.config.js .azure/deploy/
cp web.config .azure/deploy/
cd .azure/deploy
zip -r ../deployment.zip .
cd ../..
```

## Step 9: Deploy to Azure
```bash
az webapp deployment source config-zip --resource-group momweb-rg --name moss-mom --src .azure/deployment.zip
```

## Step 10: Clean up
```bash
rm -rf .azure/deploy .azure/deployment.zip
```

## Step 11: Check the deployment
```bash
az webapp browse --resource-group momweb-rg --name moss-mom
```

## Alternative: Use Azure Portal

If the CLI continues to have issues, you can also:

1. Go to https://portal.azure.com
2. Create a new Web App
3. Choose Node.js 20 LTS runtime
4. Upload the deployment.zip file manually
5. Set the startup command to "node server.js"

## Troubleshooting

If you get stuck at any step:

1. **Check logs**: `az webapp log tail --resource-group momweb-rg --name moss-mom`
2. **Restart the web app**: `az webapp restart --resource-group momweb-rg --name moss-mom`
3. **Check configuration**: `az webapp config show --resource-group momweb-rg --name moss-mom` 