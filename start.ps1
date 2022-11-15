Stop-Process -Name "node" -Force -ErrorAction Ignore
Get-Process -Name "powershell" | Where-Object { $_.ID -ne $pid } | Stop-Process -Force -ErrorAction Ignore

$be = {
	Write-Host "Starting backend"
	Set-Location "<PATH>\SiebUtilApp\BE_Node"
	node server.js
}

$fe = {
	Write-Host "Starting frontend"
	Set-Location "<PATH>\SiebUtilApp\FE_Vue"
	node "<PATH>\SiebUtilApp\FE_Vue\node_modules\serve\build\main.js" -s dist -p <FE_ORIGIN_PORT>
}

Start-Process powershell -Verb RunAs -ArgumentList "-NoExit -Command & { $be }" 
Start-Process powershell -Verb RunAs -ArgumentList "-NoExit -Command & { $fe }"