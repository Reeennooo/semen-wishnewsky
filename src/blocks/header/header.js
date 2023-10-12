const switchButton = document.querySelector('input')
const body = document.querySelector('body')
/// Черно-белая тема
switchButton.addEventListener('click', () => {
    if (localStorage.getItem('theme') === 'darkTheme') {
        localStorage.removeItem('theme')
    } else {
        localStorage.setItem('theme', 'darkTheme')
    }
    toggleBlackWhiteTheme()
})

function toggleBlackWhiteTheme () {
    try {
        if (localStorage.getItem('theme') === 'darkTheme') {
            body.classList.add('darkTheme')
            body.classList.remove('lightTheme')
        } else {
            body.classList.remove('darkTheme')
            body.classList.add('lightTheme')
        }
    } catch (err) {}
}
toggleBlackWhiteTheme()

// Тема с градиентом

// switchButton.addEventListener('click', () => {
//     if (localStorage.getItem('theme') === 'gradienThemeOrange') {
//         localStorage.removeItem('theme')
//     } else {
//         localStorage.setItem('theme', 'gradienThemeOrange')
//     }
//     toggleBlackWhiteTheme()
// })

// function toggleBlackWhiteTheme () {
//     try {
//         if (localStorage.getItem('theme') === 'gradienThemeOrange') {
//             body.classList.add('gradienThemeOrange')
//             body.classList.remove('gradienThemeViolet')
//         } else {
//             body.classList.remove('gradienThemeOrange')
//             body.classList.add('gradienThemeViolet')
//         }
//     } catch (err) {}
// }
// toggleBlackWhiteTheme()
