# FormGenerator

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Docker

`docker build -t webui . --no-cache`

Then

`docker run -d -t -p 4200:4200 --name=webui webui`


Host
Set-VMProcessor -ExposeVirtualizationExtensions $true

VM
# next two are waste of time
Install-WindowsFeature -Name Hyper-V -IncludeManagementTools -Restart
Enable-WindowsOptionalFeature -Online -FeatureName  Microsoft-Hyper-V-Management-PowerShell


NO
Install-Module DockerProvider
NO
Install-Package Docker -ProviderName DockerProvider -RequiredVersion preview

YES
[Environment]::SetEnvironmentVariable("LCOW_SUPPORTED", "1", "Machine")


https://www.altaro.com/msp-dojo/linux-containers-windows-server-2019/


https://computingforgeeks.com/how-to-run-docker-containers-on-windows-server-2019/
https://redmondmag.com/articles/2018/11/16/installing-hyperv-module-for-powershell.aspx
