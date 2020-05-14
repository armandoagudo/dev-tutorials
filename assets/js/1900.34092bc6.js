(window.webpackJsonp=window.webpackJsonp||[]).push([[1900],{2243:function(a,e,t){"use strict";t.r(e);var s=t(19),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"package-managers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-managers"}},[a._v("#")]),a._v(" Package Managers")]),a._v(" "),t("h2",{attrs:{id:"how-to-update-packages-with-the-apt-package-manager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-update-packages-with-the-apt-package-manager"}},[a._v("#")]),a._v(" How to update packages with the apt package manager")]),a._v(" "),t("p",[a._v("The "),t("strong",[a._v("A")]),a._v("dvanced "),t("strong",[a._v("P")]),a._v("ackage "),t("strong",[a._v("T")]),a._v("ool, aptly named the 'apt' package manager can handle the installation and removal of software on the Debian, Slackware, and other Linux Distributions.  Below are some simple examples of use:")]),a._v(" "),t("p",[t("strong",[a._v("update")]),t("br"),a._v("\nThis option retrieves and scans the Packages.gz files, so that information about new and updated packages is available.  To do so, enter the following command:")]),a._v(" "),t("p",[t("code",[a._v("sudo apt-get update")])]),a._v(" "),t("p",[t("strong",[a._v("upgrade")]),t("br"),a._v("\nThis option is used to install the newest versions of all packages currently installed on the system.   Packages currently installed with new versions available are retrieved and upgraded; under no circumstances are currently installed packages removed, or packages not already installed retrieved and installed.  To upgrade, enter the following command:")]),a._v(" "),t("p",[t("code",[a._v("sudo apt-get upgrade")])]),a._v(" "),t("p",[t("strong",[a._v("dist-upgrade")]),t("br"),a._v("\nIn addition to performing the function of upgrade, dist-upgrade also intelligently handles changing dependencies with new versions of packages.  It will attempt to upgrade the most important packages at the expense of less important ones if necessary.  To do so, enter the following command:")]),a._v(" "),t("p",[t("code",[a._v("sudo apt-get dist-upgrade")])]),a._v(" "),t("h2",{attrs:{id:"how-to-update-packages-with-the-pacman-package-manager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-update-packages-with-the-pacman-package-manager"}},[a._v("#")]),a._v(" How to update packages with the pacman package manager")]),a._v(" "),t("p",[a._v("To update a specific program:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("\nsudo pacman -S <programName>\n\n")])])]),t("p",[a._v("To update entire the system:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman -Syu\n\n")])])]),t("h2",{attrs:{id:"how-to-install-a-package-with-the-pacman-package-manager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-install-a-package-with-the-pacman-package-manager"}},[a._v("#")]),a._v(" How to install a package with the pacman package manager")]),a._v(" "),t("p",[a._v("In order to search for packages in the databse, searching both in packages' names and descriptions:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("\npacman -Ss string1 string2 ...\n\n")])])]),t("p",[a._v("To install a single package or list of packages (including dependencies), issue the following command:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman -S package_name1 package_name2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n\n")])])]),t("p",[t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Pacman#Querying_package_databases",target:"_blank",rel:"noopener noreferrer"}},[a._v("source"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"how-to-update-packages-with-yum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-update-packages-with-yum"}},[a._v("#")]),a._v(" How to update packages with yum")]),a._v(" "),t("p",[t("strong",[a._v("Y")]),a._v("ellowdog "),t("strong",[a._v("U")]),a._v("pdater, "),t("strong",[a._v("M")]),a._v("odified, one of the last remaining vestiges of Yellow Dog Linux, is the package manager used by Red Hat, Fedora, and CentOS systems and their derivatives. It can handle the installation and removal of software packaged as "),t("strong",[a._v("rpms")]),a._v(" for these Linux distributions.  Below are some simple examples of use:")]),a._v(" "),t("p",[t("strong",[a._v("search")]),t("br"),a._v("\nThis command will attempt to locate software packages in the configured software repositories that match the given search criteria, and display the name / version / repository location of the matches it finds.  To use it, enter the following command:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum search "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("queryString"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n")])])]),t("p",[t("strong",[a._v("install")]),t("br"),a._v("\nThis command will attempt to locate and install the named software from the configured software repositories, recursively locating and installing any needed prerequisite software as well.  To use it, enter the following command:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("packageName"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n")])])]),t("p",[t("strong",[a._v("update")]),t("br"),a._v("\nThis option is used to install the newest versions of all packages currently installed on the system. Packages currently installed with new versions available are retrieved and upgraded; new prerequisites are also retrieved and installed as necessary, and replaced or obsoleted packages are removed. To upgrade, enter the following command:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum update \n\n")])])]),t("p",[a._v("Unlike "),t("strong",[a._v("apt")]),a._v(", most "),t("strong",[a._v("yum")]),a._v(" commands will also automatically check for updates to repository metadata if a check has not been done recently (or if forced to do so) and will retrieve and scan updated metadata so that information about new and updated packages is available before the requested operation is performed.")])])}),[],!1,null,null,null);e.default=n.exports}}]);