(window.webpackJsonp=window.webpackJsonp||[]).push([[1885],{2231:function(s,a,t){"use strict";t.r(a);var e=t(19),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"check-disk-space"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-disk-space"}},[s._v("#")]),s._v(" Check Disk Space")]),s._v(" "),t("h2",{attrs:{id:"checking-disk-space"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checking-disk-space"}},[s._v("#")]),s._v(" Checking Disk Space")]),s._v(" "),t("p",[s._v("It's quite common to want to check the status of the various partitions/drives on your server/computer to see how full they are. The following command is the one you'll want to run:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" -h\n\n")])])]),t("p",[s._v("This will produce output similar to the following:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@mail ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# df -h")]),s._v("\nFilesystem            Size  Used Avail Use% Mounted on\n/dev/mapper/VolGroup-lv_root\n                       19G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".6G   16G   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("% /\ntmpfs                 245M     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  245M   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /dev/shm\n/dev/sda1             485M   47M  413M  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("% /boot\n\n")])])]),t("p",[s._v("In this basic example, we can see that the "),t("code",[s._v("/")]),s._v(" partition only has "),t("code",[s._v("9%")]),s._v(" used.")]),s._v(" "),t("p",[s._v("For a more complex example that also covers using "),t("code",[s._v("df")]),s._v(" to see various mountpoints, see below:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@mail ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# df -h")]),s._v("\nFilesystem            Size  Used Avail Use% Mounted on\n/dev/mapper/VG-root   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".9T  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".7T   89G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("95")]),s._v("% /\n/dev/mapper/VG-var    431G  145G  264G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("36")]),s._v("% /var\ndevtmpfs              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(".8G  204K  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(".8G   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("% /dev\ntmpfs                 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(".8G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".0K  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(".8G   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("% /dev/shm\n/dev/md1              495M  126M  344M  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v("% /boot\nku.example.com:9421   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".5T  487G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".0T  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("% /mnt/test\ntmpfs                 500M   86M  415M  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("% /var/ngx_pagespeed_cache\n\n")])])]),t("p",[s._v("In this example, we have a "),t("code",[s._v("/")]),s._v(" partition that's "),t("code",[s._v("95%")]),s._v(" full along with an additional "),t("code",[s._v("/var")]),s._v(" partition that's only "),t("code",[s._v("36%")]),s._v(" full.")]),s._v(" "),t("p",[s._v("It's got an external network mount of "),t("code",[s._v("2T")]),s._v(" that's mounted on "),t("code",[s._v("/mnt/test")]),s._v(" and a ramdisk/tmpfs mount of 500M mounted on "),t("code",[s._v("/var/ngx_pagespeed_cache")]),s._v(".")]),s._v(" "),t("h2",{attrs:{id:"investigate-directories-for-disk-usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#investigate-directories-for-disk-usage"}},[s._v("#")]),s._v(" Investigate Directories For Disk Usage")]),s._v(" "),t("p",[s._v("Sometimes it may be required to find out which directory consuming how much disk space especially when you are used "),t("code",[s._v("df -h")]),s._v(" and realized your available disk space is low.")]),s._v(" "),t("p",[t("strong",[s._v("du:")])]),s._v(" "),t("p",[t("code",[s._v("du")]),s._v(" command summarizes disk usage of the set of FILEs, recursively for directories.")]),s._v(" "),t("p",[s._v("It's often uses with "),t("code",[s._v("-sh")]),s._v(" option:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("-s, --summarize\n              display only a total "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" each argument\n-h, --human-readable\n              print sizes "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" human readable "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e.g., 1K 234M 2G"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])])]),t("p",[s._v("For summarizing disk usages of the files in the current directory we use:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" -sh *\n\n")])])]),t("p",[s._v("Example output:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("572K    Documents\n208M    Downloads\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",0K    Music\n724K    Pictures\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",0K    Public\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",0K    Templates\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",0K    Videos\n\n")])])]),t("p",[s._v("We can also include hidden files with using:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" -sh ."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("* *\n\n")])])]),t("p",[s._v("Example output:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(",3M    .atom\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",0K    .bash_history\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",0K    .bash_logout\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(",0K    .bashrc\n350M    .cache\n195M    .config\n12K    .dbus\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",0K    .dmrc\n44K    .gconf\n60K    .gem\n520K    .gimp-2.8\n28K    .gnome\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",0K    .ICEauthority\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(",3M    .local\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(",0K    .nano\n404K    .nv\n36K    .pki\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",0K    .profile\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(",0K    .ssh\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    .sudo_as_admin_successful\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",0K    .Xauthority\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",0K    .xsession-errors\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",0K    .xsession-errors.old\n572K    Documents\n208M    Downloads\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",0K    Music\n724K    Pictures\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",0K    Public\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",0K    Templates\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",0K    Videos\n\n")])])]),t("p",[s._v("Thirdly, you can add total to the output by adding ,-c, option:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" -sch ."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("* *\n\n")])])]),t("p",[s._v("Result:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",0K    Templates\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",0K    Videos\n769M    total\n\n")])])]),t("p",[t("strong",[s._v("Most importantly")]),s._v(" using "),t("code",[s._v("du")]),s._v(" command properly on the root directory is a life saving action to find out what application/service or user is consuming your disk space wildly. For example, in case of a ridiculously low level of disk space availability for a web and mail server, the reason could be a spam attack to your mail service and you can diagnose it just by using "),t("code",[s._v("du")]),s._v(" command.")]),s._v(" "),t("p",[s._v("Investigate root directory for disk usage:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" -sch /."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("* /*\n\n")])])]),t("p",[s._v("Example output:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("16K    /.VolumeIcon.icns\n24K    /.VolumeIcon.png\n13M    /bin\n57M    /boot\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",0K    /cdrom\n620K    /dev\n13M    /etc\n779M    /home\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    /initrd.img\n406M    /lib\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(",9M    /lib32\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",0K    /lib64\n16K    /lost+found\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",0K    /media\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",0K    /mnt\n367M    /opt\ndu: cannot access "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/proc/18221/task/18221/fd/4'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" No such "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\ndu: cannot access "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/proc/18221/task/18221/fdinfo/4'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" No such "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\ndu: cannot access "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/proc/18221/fd/4'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" No such "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\ndu: cannot access "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/proc/18221/fdinfo/4'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" No such "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    /proc\n20K    /root\ndu: cannot access "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/run/user/1000/gvfs'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" Permission denied\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(",4M    /run\n13M    /sbin\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(",0K    /srv\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    /sys\n72K    /tmp\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(",5G    /usr\n639M    /var\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    /vmlinuz\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(",8G    total\n\n")])])]),t("p",[s._v("Lastly, the best method forms when you add a threshold size value for directories to ignore small ones. This command will only show folders with more than 1GB in size which located under root directory up to the farthermost branch of the whole directory tree in your file system:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" --threshold"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1G -ch /."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("* /*\n\n")])])]),t("p",[s._v("Example output:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",4G    /usr/lib\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",8G    /usr/share\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(",5G    /usr\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(",8G    total\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);