# Degrees of Lewdity Modding Framework

## Note:
This repo is currently only set to be edited on GitGud with a mirror hosted for convenience on GitHub.  
Any changes made to the GitHub repo will not automatically sync back to GitGud.  
https://gitgud.io/dol-modders/dol-modding-framework  
https://github.com/DOL-Modders/DOL-Modding-Framework


## How to build

### Optional Prerequisites

1. Install [Tweego](http://www.motoslave.net/tweego/) and remember the path where it was installed.
2. Add path to `tweego.exe` (e.g. `C:\Program Files\Twine\tweego-2.1.0-windows-x64`) to Windows `Path` environment variable.

### Changing the build version and type

1. Open `01-config\sugarcubeConfig.js`.
2. Edit the `window.StartConfig` object to the relevant config type.
	* Normal Build - `enableImages` needs to be `true` and `enableLinkNumberify` needs to be `true`.
	* Text Only Build - `enableImages` needs to be `false` and `enableLinkNumberify` needs to be `true`.
	* Android Build - `enableImages` needs to be `true` and `enableLinkNumberify` needs to be `false`.
3. `version` is optional between release versions but will be displayed on screen in several places and stored in the saves made.
4. `debug` is optional and will only effect new games.

### Compiling the html

1. Run `compile.bat` or `compile-watch.bat`.
2. Open `Degrees of Lewdity VERSION.html`.

### Build Android version (.apk)

?
