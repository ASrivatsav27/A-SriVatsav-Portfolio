$ErrorActionPreference = "Stop"

$compiler = Get-Command tectonic -ErrorAction SilentlyContinue
if (-not $compiler) {
  Write-Error "Tectonic is required to compile this resume. Install it from https://tectonic-typesetting.github.io/ and run npm run resume:pdf again."
  exit 1
}

$projectRoot = Split-Path -Parent $PSScriptRoot
$source = Join-Path $PSScriptRoot "resume.tex"
$outputDirectory = Join-Path $projectRoot "public\resume"
New-Item -ItemType Directory -Path $outputDirectory -Force | Out-Null
& $compiler.Source --outdir $outputDirectory $source
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
