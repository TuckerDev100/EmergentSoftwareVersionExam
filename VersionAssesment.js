
/*
It has been a while since I have worked with JS, this assesment was fun! I overcomplicated it in my first revision,
but this is simpler. These things are always easier when you come back at them with fresh eyes. I realize this is well outside the
time limit, but one of my strengths is that I stick with problems.

Looking forward to hearing from you, thanks for the challenge!

Sincerely, Tucker Nemcek
tuckerdev100@outlook.com
*/


function VersionCompare(version1, version2) {
    let ver1 = version1.split(".");
    let ver2 = version2.split(".");

    if (ver1.length > ver2.length || ver1.length == ver2.length) {
        for (let i = 1; i <= ver1.length; i++){
            if (ver2[i] == null){
                ver2[i] = 0
            }
            if (ver1[i] == ver2[i]) {
                continue;
            }
            else if (ver1[i] > ver2[i]) {
                return 1;
            }
            else if (ver1[i] < ver2[i]) {
                return -1;
            }
        }
        return 0;
    }


    else if (ver1.length < ver2.length) {
        loop = 0;
        for (let i = 1; i <= ver2.length; i++){
            if (ver1[i] == null){
                ver1[i] = 0
            }
            if (ver2[i] == ver1[i]) {
                continue;
            }
            else if (ver2[i] > ver1[i]) {
                return -1;
            }
            else if (ver2[i] < ver1[i]) {
                return 1;
            }
        }
        return 0;
    }
}

 console.log(VersionCompare("2.0.0.0.1", "2"))
//problem: ("2", "2.0.0.0.0") 0, ("2", "2.0.0.0.1") -1, ("2.0.0.0.0", ""2"") 0, ("2.0.0.0.1", "2" 1)







// function VersionCompare(version1, version2) {
//     let verArr1 = version1.split(".");
//     let verArr2 = version2.split(".");

//     for (let i = 0; i <= verArr1.length; i++) {
//         if (verArr1[i] < verArr2[i]) {
//             console.log()
//             return(-1);
//         }
//         else if (verArr1[i] > verArr2[i]) {
//             return(1);
//         }
//         else if (verArr1[i] == verArr2[i]) {

//             return 0;
//             continue;
//         }

//     }

//     if (verArr1.length < verArr2.length) {
//         for (let g = verArr1.length; g <= verArr2.length; g++) {
//             if (verArr2[g] == 0) {
//                 continue;
//             } else if (verArr2[g] > 0) {
//                 return (-1);
//             }
//             }
//         }
    

//     if (verArr1.length > verArr2.length) {
//         for (let k = verArr2.length; k <= verArr1.length; k++) {
//             if (verArr2[k] == 0) {
//                 continue;
//             }
//             else if (verArr2[k] > 0) {return(-1) }
//         }
//     }
//     return (0)
// }


// VersionCompare("2", "2.1")

// console.log(VersionCompare("2", "2.1"))

//problem: ("2", "2.0.0.0.0") 0, ("2", "2.0.0.0.1") -1, ("2.0.0.0.0", ""2"") 0, ("2.0.0.0.1", "2" 1)

// function VersionCompare(version1, version2) {
//     let ver1 = version1.split(".");
//     let ver2 = version2.split(".");

//     let longer
//     let shorter 
//     let same

//     if (ver1.length > ver2.length) {
//         ver1 = longer
//         ver2 = shorter
//     } else if (ver1.lenth < ver2.length) {
//         ver1 = shorter
//         ver2 = longer
//     }

//     for (let i = shorter.length; i <= longer.length; i++) {
        
//     }