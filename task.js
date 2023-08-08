const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));
tabs.forEach(el => el.onclick = onClickTab);

function onClickTab(event) {
    let indexActive = tabs.findIndex(item => item.className.includes('tab_active'));
    let indexClick = tabs.indexOf(this);

    if (indexClick < 0) return;

    if (indexActive !== indexClick) {
        tabs[indexClick].classList.add('tab_active');
        tabsContent[indexClick].classList.add('tab__content_active');

        if (indexActive >= 0) {
            tabs[indexActive].classList.remove('tab_active');
            tabsContent[indexActive].classList.remove('tab__content_active');
        }
    }
}