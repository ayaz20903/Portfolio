import React from "react";
import { motion} from 'framer-motion';

const svgVarients = {
    hidden: {rotate : -180},
    visible : {
        rotate : 0,
        transition : { duration : 1}
    }
}

const variants = {
    visible: { opacity: 1, pathLength : 1, transition:{duration :2 , ease: "easeInOut"}},
    hidden: { opacity: 0, pathLength:0 },
  }

const AnimationImg =({yBg})=>{
    return(
            <motion.svg width="171.47" height="174.75" className="animation-img" viewBox="0 0 1276 1299" fill="none" xmlns="http://www.w3.org/2000/svg"
                varients = {svgVarients}
                // initial = {{rotate: -180}}
                // animate={{rotate: 0,}}
                // transition={{ duration: 2 }}
            >
                <g filter="url(#filter0_d_113_3888)">
                <motion.path d="M1024.06 1148.17C1018.06 1148.17 1011.97 1147.97 1005.82 1147.57C1027.69 1099.05 1039.68 1039.22 1039.68 969.386C1039.66 826.698 989.669 669.065 908.909 529.186C904.712 521.923 900.442 514.68 896.082 507.527L1172.92 457.878C1233.08 580.112 1268.99 711.561 1268.99 831.88C1268.99 932.255 1243.99 1011.35 1200.91 1065.31C1157.83 1119.25 1096.7 1148.17 1024.06 1148.17Z" fill="#0E0E0F"
                    varients = {variants}
                    // initial = {{opacity: 0, pathLength : 0}}
                    // animate ={{opacity: 1 , pathLength: 1}}
                    // transition={{ease: "easeInOut", duration: 2 }}
                />
                <motion.path d="M896.065 507.522C816.52 376.767 710.213 263.518 593.067 195.867C531.346 160.222 472.374 140.611 418.521 135.792C427.548 117.001 438.121 100.062 450.079 85.0805C493.161 31.1285 554.293 2.23765 626.934 2.21661C686.454 2.21661 753.707 21.6596 824.947 62.797C947.492 133.541 1058.54 255.038 1138.9 394.252C1150.94 415.105 1162.3 436.358 1172.91 457.884L896.065 507.522Z" fill="#161617"/>
                <motion.path d="M1024.1 1150.39C1024.08 1150.39 1024.06 1150.39 1024.06 1150.39C1017.73 1150.39 1011.33 1150.17 1004.83 1149.73C1005.16 1149.02 1005.49 1148.31 1005.8 1147.58C1011.97 1147.98 1018.06 1148.18 1024.06 1148.18C1096.7 1148.16 1157.83 1119.25 1200.92 1065.31C1243.98 1011.35 1268.97 932.254 1268.97 831.884C1268.97 711.568 1233.07 580.12 1172.9 457.888L1175.17 457.487C1235.28 579.81 1271.19 711.331 1271.19 831.884C1271.19 932.619 1246.1 1012.22 1202.63 1066.7C1159.18 1121.15 1097.32 1150.39 1024.1 1150.39Z" fill="#0E0E0F"/>
                <motion.path d="M1172.92 457.878C1162.31 436.359 1150.96 415.093 1138.91 394.248C1058.54 255.027 947.497 133.536 824.951 62.7883C753.711 21.6664 686.457 2.2109 626.938 2.2109C554.298 2.23196 493.165 31.1204 450.083 85.0652C438.123 100.057 427.551 116.986 418.524 135.767C417.724 135.704 416.949 135.641 416.164 135.578C425.338 116.354 436.11 99.0252 448.35 83.6966C491.817 29.2465 553.683 4.93502e-05 626.884 4.93502e-05C626.896 4.93502e-05 626.924 4.93502e-05 626.938 4.93502e-05C686.937 4.93502e-05 754.551 19.6029 826.043 60.8721C949.043 131.893 1060.29 253.637 1140.83 393.132C1152.98 414.208 1164.48 435.706 1175.17 457.478L1172.92 457.878Z" fill="#161617"/>
                <motion.path d="M633.607 174.775C500.007 97.6506 380.259 96.648 298.766 157.3C376.926 123.577 479.127 134.709 591.061 199.351C836.608 341.097 1035.64 685.874 1035.64 969.386C1035.64 1098.65 994.186 1192.72 925.902 1243.55C1019.17 1203.3 1078.19 1099.1 1078.19 944.831C1078.19 661.298 879.14 316.541 633.607 174.775Z" fill="#661D72"/>
                <motion.path d="M633.608 174.768L635.622 171.283C563.863 129.87 495.848 110.121 435.276 110.121C382.342 110.101 335.088 125.244 296.354 154.082C294.727 155.284 294.26 157.546 295.275 159.319C296.301 161.092 298.487 161.806 300.354 160.991C328.208 148.987 359.208 142.75 392.768 142.75C451.568 142.75 518.235 161.949 589.049 202.811C711.023 273.225 821.795 394.365 901.955 533.216C982.137 672.046 1031.64 828.566 1031.62 969.374C1031.62 1033.59 1021.33 1088.9 1002.66 1134.35C983.992 1179.8 956.996 1215.36 923.503 1240.31C921.863 1241.53 921.396 1243.79 922.423 1245.57C923.436 1247.32 925.623 1248.05 927.504 1247.24C975.045 1226.74 1013.83 1189.87 1040.59 1138.82C1067.39 1087.72 1082.22 1022.46 1082.22 944.816C1082.2 802.113 1032.21 644.492 951.463 504.622C870.702 364.773 759.196 242.654 635.622 171.283L633.608 174.768L631.595 178.253C753.556 248.667 864.343 369.786 944.489 508.657C1024.67 647.488 1074.19 803.988 1074.17 944.816C1074.17 1021.45 1059.52 1085.42 1033.45 1135.07C1007.41 1184.73 970.064 1220.09 924.316 1239.84L925.904 1243.55L928.317 1246.77C963.104 1220.89 990.982 1184.02 1010.12 1137.41C1029.26 1090.8 1039.67 1034.45 1039.67 969.374C1039.67 826.692 989.658 669.05 908.929 529.18C828.171 389.331 716.65 267.213 593.076 195.841C521.329 154.428 453.343 134.7 392.768 134.7C358.222 134.7 326.088 141.12 297.169 153.613L298.769 157.302L301.167 160.522C338.461 132.784 383.862 118.172 435.276 118.151C494.089 118.151 560.769 137.37 631.595 178.253L633.608 174.768Z" fill="#040606"/>
                <motion.path
                    
                d="M1035.63 969.389C1035.63 1252.93 836.599 1367.85 591.052 1226.1C345.519 1084.31 146.463 739.551 146.463 456.032C146.463 172.512 345.519 57.5932 591.052 199.363C836.599 341.113 1035.63 685.87 1035.63 969.389Z" fill="#9C27B0"/>
                <motion.path d="M1035.63 969.385H1031.61C1031.63 1069.32 1006.73 1147.73 964.182 1201C942.909 1227.66 917.214 1248.05 887.881 1261.85C858.547 1275.63 825.548 1282.77 789.616 1282.79C730.736 1282.79 663.961 1263.53 593.069 1222.58C471.109 1152.18 360.323 1031.05 280.176 892.208C199.998 753.369 150.475 596.85 150.491 456.029C150.489 356.113 175.38 277.701 217.926 224.416C239.204 197.773 264.892 177.361 294.23 163.584C323.563 149.807 356.562 142.666 392.495 142.646C451.374 142.646 518.149 161.905 589.041 202.83C711.014 273.23 821.788 394.388 901.949 533.226C982.126 672.065 1031.65 828.584 1031.61 969.385H1035.63H1039.66C1039.66 826.703 989.652 669.071 908.908 529.201C828.148 389.33 716.642 267.243 593.069 195.871C521.243 154.4 453.136 134.614 392.495 134.614C355.496 134.594 321.269 141.978 290.803 156.301C245.085 177.745 207.894 214.806 182.259 265.401C156.611 315.997 142.444 380.106 142.442 456.029C142.458 598.731 192.461 756.363 273.203 896.234C353.963 1036.08 465.468 1158.19 589.041 1229.56C660.882 1271.03 728.976 1290.82 789.616 1290.82C826.614 1290.84 860.841 1283.46 891.308 1269.13C937.028 1247.67 974.216 1210.63 999.848 1160.03C1025.5 1109.44 1039.66 1045.31 1039.66 969.385H1035.63Z" fill="#040606" />
                <motion.path d="M459.656 772.973L231.998 534.489V455.378L459.656 479.758V570.758L317.497 544.004V545.775L459.656 681.681V772.973Z" fill="#491551"
                initial = {{opacity: 0, pathLength : 0}}
                animate ={{opacity: 1 , pathLength: 1}}
                transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}
                />
                <motion.path d="M543.109 926.398L481.548 890.878L609.548 494.607L671.362 530.307L543.109 926.398Z" fill="#491551"
                initial = {{opacity: 0, pathLength : 0}}
                animate ={{opacity: 1 , pathLength: 1}}
                transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M960.428 955.034L732.759 930.654V839.356L874.926 867.594V865.828L732.759 728.445V637.439L960.428 875.927V955.034Z" fill="#491551"
                initial = {{opacity: 0, pathLength : 0}}
                animate ={{opacity: 1 , pathLength: 1}}
                transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M234.677 819.845L92.5186 683.965V682.17L234.677 708.94L298.52 672.147L371.465 741.873L234.677 819.845Z" fill="#8E9190"
                initial = {{opacity: 0, pathLength : 0}}
                animate ={{opacity: 1 , pathLength: 1}}
                transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M234.681 819.838L236.768 817.651L95.5428 682.659V682.168H92.5236L91.9659 685.134L234.124 711.902C234.834 712.038 235.563 711.902 236.19 711.529L298.071 675.861L366.457 741.264L233.188 817.21L234.681 819.838L236.177 822.466L372.964 744.502C373.805 744.01 374.351 743.196 374.471 742.247C374.591 741.281 374.257 740.348 373.564 739.687L300.618 669.945C299.645 669.013 298.178 668.843 297.017 669.504L234.142 705.748L93.0814 679.201C92.2015 679.031 91.2861 679.269 90.5961 679.845C89.9062 680.422 89.5044 681.269 89.5044 682.168V683.948C89.5044 684.778 89.8384 685.558 90.4368 686.118L232.594 822.025C233.557 822.957 235.02 823.127 236.177 822.466L234.681 819.838Z" fill="#040606" 
                 initial = {{opacity: 0, pathLength : 0}}
                animate ={{opacity: 1 , pathLength: 1}}
                transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M371.473 741.867V833.153L234.681 911.153L234.683 819.834L371.473 741.867Z" fill="#BBBDBB"
                 initial = {{opacity: 0, pathLength : 0}}
                 animate ={{opacity: 1 , pathLength: 1}}
                 transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M371.468 741.872H368.454V831.43L237.695 905.953L237.697 821.615L372.96 744.499L371.468 741.872L369.974 739.245L233.184 817.22C232.238 817.765 231.659 818.773 231.659 819.847V911.157C231.659 912.215 232.228 913.223 233.161 913.752C234.093 914.297 235.235 914.297 236.172 913.768L372.96 835.793C373.907 835.264 374.494 834.256 374.494 833.165V741.872C374.494 740.798 373.92 739.806 372.987 739.261C372.055 738.732 370.908 738.716 369.974 739.245L371.468 741.872Z" fill="#040606" 
                 initial = {{opacity: 0, pathLength : 0}}
                animate ={{opacity: 1 , pathLength: 1}}
                transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M371.473 539.946L143.812 515.558L7.02002 593.553L234.684 617.923L371.473 539.946Z" fill="#F0F8FF"
                 initial = {{opacity: 0, pathLength : 0}}
                 animate ={{opacity: 1 , pathLength: 1}}
                 transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M371.473 539.952L371.791 536.943L144.133 512.565C143.506 512.493 142.865 512.619 142.317 512.941L5.52423 590.928C4.38326 591.573 3.79578 592.863 4.06446 594.152C4.33134 595.442 5.39165 596.409 6.69741 596.552L234.361 620.912C234.99 620.984 235.629 620.859 236.177 620.554L372.966 542.567C374.113 541.922 374.698 540.615 374.432 539.325C374.166 538.035 373.099 537.086 371.791 536.943L371.473 539.952L369.979 537.319L234.035 614.822L16.6366 591.537L144.461 518.673L371.152 542.943L371.473 539.952Z" fill="#040606" 
                 initial = {{opacity: 0, pathLength : 0}}
                animate ={{opacity: 1 , pathLength: 1}}
                transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M371.474 539.943V630.948L234.685 708.911V617.924L371.474 539.943Z" fill="#D1D3D5" 
                initial = {{opacity: 0, pathLength : 0}}
                animate ={{opacity: 1 , pathLength: 1}}
                transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M371.471 539.953H368.457V629.192L237.7 703.724V619.689L372.963 542.582L371.471 539.953L369.977 537.324L233.186 615.319C232.239 615.852 231.662 616.847 231.662 617.931V708.928C231.662 710.011 232.232 710.988 233.165 711.539C234.097 712.09 235.24 712.09 236.176 711.557L372.963 633.579C373.91 633.029 374.496 632.052 374.496 630.95V539.953C374.496 538.869 373.924 537.893 372.99 537.342C372.057 536.809 370.91 536.791 369.977 537.324L371.471 539.953Z" fill="#040606"
                initial = {{opacity: 0, pathLength : 0}}
                animate ={{opacity: 1 , pathLength: 1}}
                transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M318.119 1064.57L454.918 986.591L583.172 590.494L446.371 668.472L318.119 1064.57Z" fill="#D1D3D5"
                initial = {{opacity: 0, pathLength : 0}}
                animate ={{opacity: 1 , pathLength: 1}}
                transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M318.128 1064.56L319.622 1067.18L456.422 989.214C457.063 988.83 457.569 988.219 457.796 987.521L586.05 591.406C586.435 590.202 586.05 588.91 585.09 588.125C584.116 587.339 582.768 587.235 581.676 587.845L444.889 665.826C444.235 666.192 443.743 666.803 443.516 667.519L315.262 1063.62C314.874 1064.8 315.262 1066.11 316.222 1066.9C317.196 1067.68 318.541 1067.79 319.622 1067.18L318.128 1064.56L321.009 1065.48L448.888 670.486L577.903 596.956L452.408 984.536L316.635 1061.92L318.128 1064.56Z" fill="#040606" 
                 initial = {{opacity: 0, pathLength : 0}}
                animate ={{opacity: 1 , pathLength: 1}}
                transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M583.179 590.479L521.365 554.786L384.566 632.756L446.379 668.448L583.179 590.479Z" fill="#F0F8FF"
                 initial = {{opacity: 0, pathLength : 0}}
                 animate ={{opacity: 1 , pathLength: 1}}
                 transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M583.182 590.477L584.688 587.862L522.875 552.165C521.956 551.635 520.795 551.635 519.876 552.165L383.076 630.149C382.141 630.68 381.554 631.669 381.554 632.747C381.554 633.843 382.129 634.832 383.062 635.38L444.875 671.059C445.795 671.589 446.955 671.589 447.875 671.077L584.675 593.092C585.608 592.562 586.195 591.555 586.195 590.477C586.195 589.399 585.623 588.392 584.688 587.862L583.182 590.477L581.675 587.844L446.394 664.962L390.636 632.783L521.355 558.262L581.662 593.092L583.182 590.477Z" fill="#040606" 
                 initial = {{opacity: 0, pathLength : 0}}
                animate ={{opacity: 1 , pathLength: 1}}
                transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M92.5197 682.18V683.956L234.678 819.857V911.16L7.01562 672.654V593.559L234.678 617.939V708.928L92.5197 682.18Z" fill="#F4F3F2"
                initial = {{opacity: 0, pathLength : 0}}
                animate ={{opacity: 1 , pathLength: 1}}
                transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M92.525 682.15H89.5073V683.946C89.5073 684.765 89.8403 685.55 90.44 686.125L231.666 821.129V903.606L10.0392 671.429V596.901L231.666 620.645V705.284L93.0828 679.204C92.2042 679.03 91.2872 679.256 90.5985 679.832C89.9082 680.407 89.5073 681.261 89.5073 682.15H92.525L91.9671 685.131L234.125 711.891C235.006 712.048 235.923 711.804 236.611 711.247C237.3 710.671 237.703 709.817 237.703 708.91V617.926C237.703 616.392 236.537 615.084 235.006 614.91L7.34221 590.538C6.49495 590.451 5.63724 590.712 5.00267 591.288C4.36809 591.863 4.00195 592.682 4.00195 593.537V672.632C4.00195 673.416 4.3053 674.166 4.83702 674.724L232.501 913.229C233.35 914.118 234.666 914.397 235.806 913.944C236.95 913.473 237.703 912.375 237.703 911.137V819.839C237.703 819.019 237.37 818.217 236.77 817.659L95.5444 682.656V682.15H92.525Z" fill="#040606" 
                 initial = {{opacity: 0, pathLength : 0}}
                animate ={{opacity: 1 , pathLength: 1}}
                transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M318.119 1064.57L256.568 1029.03L384.558 632.787L446.371 668.474L318.119 1064.57Z" fill="#F4F3F2"
                initial = {{opacity: 0, pathLength : 0}}
                animate ={{opacity: 1 , pathLength: 1}}
                transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M318.122 1064.57L319.628 1061.95L260.193 1027.64L386.295 637.27L442.748 669.851L315.254 1063.64L318.122 1064.57L321.001 1065.49L449.242 669.403C449.68 668.028 449.121 666.549 447.88 665.844L386.08 630.152C385.281 629.705 384.335 629.636 383.481 629.963C382.628 630.29 381.974 630.977 381.694 631.854L253.696 1028.1C253.26 1029.46 253.829 1030.94 255.061 1031.64L316.614 1067.18C317.401 1067.64 318.347 1067.71 319.201 1067.39C320.068 1067.06 320.707 1066.37 321.001 1065.49L318.122 1064.57Z" fill="#040606" 
                 initial = {{opacity: 0, pathLength : 0}}
                animate ={{opacity: 1 , pathLength: 1}}
                transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M872.241 936.141L644.578 697.64L507.785 775.614L735.435 1014.1L872.241 936.141Z" fill="#F0F8FF"
                 initial = {{opacity: 0, pathLength : 0}}
                 animate ={{opacity: 1 , pathLength: 1}}
                 transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M872.244 936.111L874.428 934.029L646.773 695.524C645.815 694.533 644.287 694.314 643.094 694.986L506.29 772.971C505.489 773.441 504.943 774.23 504.795 775.154C504.662 776.078 504.97 777.002 505.61 777.674L733.256 1016.18C734.23 1017.19 735.742 1017.4 736.951 1016.72L873.739 938.748C874.545 938.295 875.099 937.472 875.234 936.548C875.368 935.641 875.066 934.701 874.428 934.029L872.244 936.111L870.749 933.508L736.011 1010.3L512.635 776.296L644.018 701.402L870.061 938.211L872.244 936.111Z" fill="#040606" 
                 initial = {{opacity: 0, pathLength : 0}}
                animate ={{opacity: 1 , pathLength: 1}}
                transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M735.446 1093.2L872.249 1015.22V936.12L735.446 1014.09V1093.2Z" fill="#F4F3F2"
                initial = {{opacity: 0, pathLength : 0}}
                animate ={{opacity: 1 , pathLength: 1}}
                transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M735.448 1093.2L736.951 1095.82L873.743 1017.85C874.693 1017.31 875.26 1016.3 875.26 1015.22V936.111C875.26 935.038 874.693 934.041 873.758 933.52C872.823 932.968 871.688 932.968 870.753 933.505L733.961 1011.47C733.01 1012 732.443 1013 732.443 1014.09V1093.2C732.443 1094.28 732.995 1095.26 733.93 1095.81C734.865 1096.36 736.015 1096.36 736.951 1095.82L735.448 1093.2H738.484V1015.85L869.22 941.309V1013.46L733.961 1090.57L735.448 1093.2Z" fill="#040606" 
                 initial = {{opacity: 0, pathLength : 0}}
                animate ={{opacity: 1 , pathLength: 1}}
                transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M580.197 936.598L507.782 977.536L649.933 1005.78V1003.99L580.197 936.598Z" fill="#8E9190"
                initial = {{opacity: 0, pathLength : 0}}
                animate ={{opacity: 1 , pathLength: 1}}
                transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M580.211 936.59L578.724 933.954L506.305 974.9C505.202 975.513 504.604 976.755 504.803 977.997C505.002 979.238 505.968 980.235 507.195 980.48L649.35 1008.73C650.239 1008.9 651.159 1008.69 651.864 1008.1C652.569 1007.52 652.968 1006.68 652.968 1005.77V1003.98C652.968 1003.17 652.63 1002.39 652.048 1001.82L582.296 934.413C581.346 933.478 579.889 933.294 578.724 933.954L580.211 936.59L578.111 938.767L646.927 1005.27V1005.77H649.932L650.545 1002.8L516.347 976.142L581.683 939.212L580.211 936.59Z" fill="#040606" 
                 initial = {{opacity: 0, pathLength : 0}}
                animate ={{opacity: 1 , pathLength: 1}}
                transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M507.795 866.603V775.597L735.456 1014.09V1093.2L507.795 1068.81V977.523L649.943 1005.77V1003.99L507.795 866.603Z" fill="#F4F3F2"
                initial = {{opacity: 0, pathLength : 0}}
                animate ={{opacity: 1 , pathLength: 1}}
                transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                <motion.path d="M507.791 866.603H510.803V783.139L732.425 1015.3V1089.84L510.803 1066.12V981.201L649.353 1008.74C650.251 1008.91 651.164 1008.68 651.85 1008.11C652.568 1007.52 652.959 1006.69 652.959 1005.77V1004C652.959 1003.18 652.633 1002.4 652.046 1001.81L509.883 864.433L507.791 866.603L505.683 868.773L646.922 1005.27V1005.77H649.941L650.544 1002.81L508.377 974.56C507.484 974.396 506.564 974.625 505.87 975.196C505.164 975.767 504.764 976.616 504.764 977.529V1068.83C504.764 1070.36 505.937 1071.66 507.457 1071.83L735.118 1096.21C735.983 1096.3 736.831 1096.01 737.467 1095.44C738.104 1094.88 738.463 1094.05 738.463 1093.2V1014.1C738.463 1013.33 738.169 1012.58 737.631 1012.02L509.964 773.528C509.124 772.631 507.804 772.337 506.657 772.811C505.523 773.251 504.764 774.377 504.764 775.601V866.603C504.764 867.419 505.097 868.202 505.683 868.773L507.791 866.603Z" fill="#040606" 
                 initial = {{opacity: 0, pathLength : 0}}
                animate ={{opacity: 1 , pathLength: 1}}
                transition={{ease: "easeInOut", duration: 2 , repeat: Infinity,repeatDelay: 1}}/>
                </g>
                <defs>
                <filter id="filter0_d_113_3888" x="0" y="0" width="1275.19" height="1298.82" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_113_3888"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_113_3888" result="shape"/>
                </filter>
                </defs>
            </motion.svg>
    )
}

export default AnimationImg;