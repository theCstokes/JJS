@echo off
echo Runninng...
call grunt
pushd framework
call lessc --glob ui-framework/theme/main.less theme/main.css
popd
echo Done
