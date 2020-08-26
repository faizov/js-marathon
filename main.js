const $btn = document.getElementById('btn-kick');
const $btnSuperKick = document.getElementById('btn-super-kick');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    damageCount: document.getElementById('damage-count'),
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    changeHP: changeHP,
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    damageCount: document.getElementById('damage-count-enemy'),
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    changeHP: changeHP,
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
}

$btn.addEventListener('click', function(){
    character.changeHP(random(20));
    enemy.changeHP(random(20));
    
});

$btnSuperKick.addEventListener('click', function(){
    character.changeHP(random(50));
    enemy.changeHP(random(50));
    $btnSuperKick.disabled = true;
});

function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
}

function renderHP(){
    character.renderHPLife();
    enemy.renderHPLife();
    character.renderProgressbarHP();
    enemy.renderProgressbarHP();
}

function renderHPLife() {
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP() {
    this.elProgressbar.style.width = this.damageHP / this.defaultHP * 100 + '%';
}

function changeHP (count, damageHP, defaultHP) {
    this.damageHP -= count;


    const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
    

    if (this.damageHP <= count) {
        this.damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл')
        $btn.disabled = true;
        $btnSuperKick.disabled = true;
    }

    this.damageCount.innerText = '-' + count;

    character.renderHP()
    enemy.renderHP()
    console.log(log)

    const $logs = document.querySelector('#logs');
    for (let i = 0; i < 1; i++) {
        const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
        const $p = document.createElement('p');
    
        $p.innerText = `${log}`;
        
        $logs.insertBefore($p, $logs.children[0]);
    }
}

function random(num) {
    return Math.ceil(Math.random() * num);
    
}

function generateLog (firstPerson, secondPerson, count, test) {
    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. -${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. -${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. -${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. -${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]  `,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. -${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. -${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника. -${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. -${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. -${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`
    ];

    return logs[random(logs.length - 1)]
}






init();
