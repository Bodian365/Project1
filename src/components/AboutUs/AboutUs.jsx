import './AboutUs.css';

import React from 'react';

function AboutUs() {
    return (
        <div>
            <h1>Про нас</h1>
            <div className="aboutUs-wrapper">
                <p className="aboutUs-items">
                    Console Rent — це провідний сервіс оренди ігрових консолей та відеоігор, який надає геймерам
                    можливість насолоджуватися найновішими ігровими технологіями без необхідності купівлі дорогого
                    обладнання. Ми пропонуємо широкий асортимент сучасних ігрових консолей — від PlayStation і Xbox до
                    Nintendo Switch, а також колекцію популярних ігор для будь-яких смаків.
                </p>

                <p className="aboutUs-items">
                    Наші клієнти можуть обирати зручні умови оренди: короткострокові або довгострокові плани, що
                    дозволяє гнучко адаптуватися до ваших потреб. Console Rent гарантує швидку доставку, простоту в
                    користуванні та технічну підтримку на кожному етапі оренди. Незалежно від того, чи хочете ви
                    протестувати нову гру або спробувати консоль перед покупкою, ми забезпечимо вам найкращий досвід без
                    зайвих витрат.
                </p>

                <p className="aboutUs-items">
                    З нами ви завжди на крок попереду в світі відеоігор, отримуючи доступ до новітніх розваг у зручний
                    для вас час. Console Rent — це ваш простий і вигідний спосіб залишатися в епіцентрі ігрових подій!
                </p>
            </div>
        </div>
    );
}
export default AboutUs;