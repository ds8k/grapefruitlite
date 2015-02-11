jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore grapefruitfree.keystore platforms/android/ant-build/GrapefruitBlowsFree-release-unsigned.apk grapefruitfree
rm -f platforms/android/ant-build/GrapefruitBlowsFree.apk
zipalign -v 4 platforms/android/ant-build/GrapefruitBlowsFree-release-unsigned.apk platforms/android/ant-build/GrapefruitBlowsFree.apk