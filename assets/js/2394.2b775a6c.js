(window.webpackJsonp=window.webpackJsonp||[]).push([[2394],{2740:function(t,e,s){"use strict";s.r(e);var n=s(19),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"pack-and-unpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pack-and-unpack"}},[t._v("#")]),t._v(" Pack and unpack")]),t._v(" "),s("h2",{attrs:{id:"manually-converting-c-structs-to-pack-syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manually-converting-c-structs-to-pack-syntax"}},[t._v("#")]),t._v(" Manually Converting C Structs to Pack Syntax")]),t._v(" "),s("p",[t._v("If you're ever dealing with C Binary API's from Perl Code, via the "),s("code",[t._v("syscall")]),t._v(", "),s("code",[t._v("ioctl")]),t._v(", or "),s("code",[t._v("fcntl")]),t._v(" functions, you need to know how to construct memory in a C Compatible way.")]),t._v(" "),s("p",[t._v("For instance, if you were ever dealing with some function that expected a "),s("code",[t._v("timespec")]),t._v(", you'd look into "),s("code",[t._v("/usr/include/time.h")]),t._v(" and find:")]),t._v(" "),s("div",{staticClass:"language-perl extra-class"},[s("pre",{pre:!0,attrs:{class:"language-perl"}},[s("code",[t._v("struct timespec\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    __time_t tv_sec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("            "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/* Seconds.  */")]),t._v("\n    __syscall_slong_t tv_nsec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/* Nanoseconds.  */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("You do a dance with "),s("code",[t._v("cpp")]),t._v(" to find what that really means:")]),t._v(" "),s("div",{staticClass:"language-perl extra-class"},[s("pre",{pre:!0,attrs:{class:"language-perl"}},[s("code",[t._v("cpp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("E "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("include"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("h "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-o")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dev"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("stdout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" grep __time_t\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# typedef long int __time_t;")]),t._v("\ncpp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("E "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("include"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("h "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-o")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dev"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("stdout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" grep __syscall_slong_t\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# typedef long int __syscall_slong_t")]),t._v("\n\n")])])]),s("p",[t._v("So its a (signed) int")]),t._v(" "),s("div",{staticClass:"language-perl extra-class"},[s("pre",{pre:!0,attrs:{class:"language-perl"}},[s("code",[t._v("echo "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'void main(){ printf(\"%#lx\\n\", sizeof(__syscall_slong_t)); }'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" \n  gcc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-x")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("include stdio"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("h "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("include time"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("h "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-o")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/tmp/a")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("out "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/tmp/a")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("out\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 0x8")]),t._v("\n\n")])])]),s("p",[t._v("And it takes 8 bytes. So 64bit signed int. And I'm on a 64Bit Processor. =)")]),t._v(" "),s("p",[t._v("Perldoc "),s("code",[t._v("pack")]),t._v(" says")]),t._v(" "),s("blockquote"),t._v(" "),s("pre",{staticClass:"lang-none prettyprint-override"},[s("code",[t._v("            q  A signed quad (64-bit) value.\n\n```\n\n\n\n\nSo to pack a timespec:\n\n```perl\nsub packtime {\n    my ( $config ) = @_; \n    return pack 'qq', @{$config}{qw( tv_sec tv_nsec )};\n}\n\n```\n\nAnd to unpack a timespec:\n\n```perl\nsub unpacktime {\n   my ( $buf ) = @_;\n   my $out = {};\n   @{$out}{qw( tv_sec tv_nsec )} = unpack 'qq', $buf;\n   return $out;\n}\n\n```\n\nNow you can just use those functions instead.\n\n```perl\nmy $timespec = packtime({ tv_sec => 0, tv_nsec => 0 });\nsyscall(  ..., $timespec ); # some syscall that reads timespec\n\nlater ...\nsyscall( ..., $timespec ); # some syscall that writes timespec\nprint Dumper( unpacktime( $timespec ));\n\n```\n\n\n\n## Constructing an IPv4 header\n\n\nSometimes you have to deal with structures defined in terms of C data types from Perl. One such application is the creation of raw network packets, in case you want to do something fancier than what the regular socket API has to offer. This is just what `pack()` (and `unpack()` of course) is there for.\n\n[The obligatory part of an IP header](https://en.wikipedia.org/wiki/IPv4#Header) is 20 octets (AKA \"bytes\") long. As you can see behind this link, source and destination IP address make up the last two 32-bit values in the header. Among the other fields are some with 16 bits, some with 8 bits, and a few smaller chunks between 2 and 13 bits.\n\nAssuming we have the following variables to stuff into our header:\n\n```perl\nmy ($dscp, $ecn, $length,\n    $id, $flags, $frag_off,\n    $ttl, $proto,\n    $src_ip,\n    $dst_ip);\n\n```\n\nNote that three fields from the header are missing:\n\n- The version is always 4 (it's IPv4 after all)\n- IHL is 5 in our example as we don't have an **options** field; length is specified in units of 4 octets so 20 octets gives a length of 5.\n- The checksum can be left at 0. Actually we'd have to calculate it but the code to do this doesn't concern us here.\n\nWe could try and use bit operations to construct e.g. the first 32 bits:\n\n```perl\nmy $hdr = 4 << 28 | 5 << 24 | $dscp << 18 | $ecn << 16 | $length;\n\n```\n\nThis approach only works up to the size of an integer though, which is usually 64 bits but can be as low as 32. Worse, it depends on the CPU's [endianness](https://en.wikipedia.org/wiki/Endianness) so it will work on some CPUs and fail on others. Let's try `pack()`:\n\n```perl\nmy $hdr = pack('H2B8n', '45', sprintf(\"%06b%02b\", $dscp, $ecn), $length);\n\n```\n\nThe template first specifies `H2`, a **2-character hex string, high nybble first**. The corresponding argument to pack is \"45\"—version 4, length 5. The next template is `B8`, an **8-bit bit string, descending bit order inside each byte**. We need to use bit strings to control layout down to chunks smaller than a nybble (4 bits), so the `sprintf()` is used to construct such a bit string from 6 bits from `$dscp` and 2 from `$ecn`. The last one is `n`, an **unsigned 16-bit value in Network Byte Order**, i.e. always big-endian no matter what your CPU's native integer format is, and it is filled from `$length`.\n\nThat's the first 32 bits of the header. The rest can be built similarly:\n\n|Template|Argument|Remarks\n|---|---|---|---|---|---|---|---|---|---\n|`n`|`$id`|\n|`B16`|`sprintf(\"%03b%013b\", $flags, $frag_off)`|Same as DSCP/ECN\n|`C2`|`$ttl, $proto`|Two consecutive unsigned octets\n|`n`|`0` / `$checksum`|`x` could be used to insert a null byte but `n` lets us specify an argument should we choose to calculate a checksum\n|`N2`|`$src_ip, $dst_ip`|use `a4a4` to pack the result of two `gethostbyname()` calls as it is in Network Byte Order already!\n\nSo the complete call to pack an IPv4 header would be:\n\n```perl\nmy $hdr = pack('H2B8n2B16C2nN2',\n    '45', sprintf(\"%06b%02b\", $dscp, $ecn), $length,\n    $id, sprintf(\"%03b%013b\", $flags, $frag_off),\n    $ttl, $proto, 0,\n    $src_ip, $dst_ip\n);\n\n```\n\n")])])])}),[],!1,null,null,null);e.default=a.exports}}]);