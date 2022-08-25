let quote = document.querySelector('.quote');

let bestQuotes = ['#доплин', '#дрофиные', '#дульпин', '#дофлин', '#друплин', '#передаю слово ребятам из дольфин', '#у нас всё хорошо, мы два раза упали', '#случилась утечка', '#держим оборону', '#на этой неделе всё спокойно', '#два дня без падений, это рекорд', '#выручка выросла', '#мы много тратим на jira, будем использовать яндекс трекер', '#надо порефлексировать', '#надо посмотреть в амплитуду', '#дейли сегодня не будет', '#надо провести ресёрч', '#фри не делает нам погоды', '#переходим на новую доску', '#это неправильный подход', '#слишком маленькая когорта пользователей', '#немного не понял', '#подавай тикет', '#передам Денису информацию', '#нужно поговорить с Денисом', '#прощаемся открыто в чате', '#я закрыл чат в телеге', '#не скачивается ядро', '#включите впн', '#попробуйте 1.1.1.1', '#всё хорошо, но надо переделать', '#продляем акцию переманивания', '#маркетинг, кто говорить будет от вас', '#ухожу в фбтул', '#ухожу в окто', '#автозаливалка', '#напишите в саппорт', '#передам ваши пожелания продактам', '#проблема не на нашей стороне', '#подтверди или опровергни', '#я сейчас на Кипре', '#@канал дейли в 12.00', '#Жень подскажи', '#Женя будет выступать сегодня?', '#сегодня нас покидает Роберт', '#какая версия антика у вас?', '#разберите чек саппорт', '#верните на кого упало от меня', '#спасибо за фидбек', '#передали проблему в тех. отдел', '#скиньте скрин с проблемой', '#почту вашу подскажите', '#пофиксили, проверяйте', '#english please', '#я провёл исследование...']

let bestTitles = ['Дуплин', 'Дофлин', 'Дульпин', 'Дрофиные', 'Дохлый', 'Доплин']

setInterval(function changeQuote() {
    quote.innerText = bestQuotes[Math.floor(Math.random() * bestQuotes.length)];
}, 4000);

setInterval(function changeTitle() {
    document.title = "Hello, " + bestTitles[Math.floor(Math.random() * bestTitles.length)] + "!";
}, 10000);