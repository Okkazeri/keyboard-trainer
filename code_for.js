const input = document.querySelector("input");
const letters = Array.from(document.querySelectorAll("[data-letters]"));// получаем массив из символов 
const specs = Array.from(document.querySelectorAll("[data-spec]")); // олучаем массив из специальных символов типа ctrl, tab и т.п.
const textExample = document.querySelector("#textExample")
const symbolsPerMinute = document.querySelector('#symbolsPerMinute');
const errorPercent = document.querySelector('#errorPercent');

var text = ``;

document.querySelector("#button1").onclick = function(){
	text = `Coherence comprises the components of the surface of the text in a meaningful and
sequenced order; coherence deals with the order of the sentences and their interrelatedness;
informativity focuses on how new information is transferred in the text; situationality refers to
the notions of time and place which are necessary for a reader to place the information into
communication; intentionality reflects the aim of the writer; acceptability is the reader‟s
evaluation that how relevant the text is with the expectation of the reader, and intertextuality
simply indicates the implicit or explicit relation of the text with other texts (De Beaugranda
and Dressler, 1981).
In this sense, textlinguistics studies different text types and clarifies their properties in
order to inform the reader about their classifications, characteristics, and functions. Among
these, scientific texts enable readers to get knowledge on a specific scientific issue. By this
way, readers can get the required information on what they need. Scientific texts are a part of
informative texts as they provide information for their readers. The purpose of such texts is to
discuss a scientific problem which forms the subject of their study. Therefore, in a scientific
text, the problem should be stated clearly in order to make the readers comprehend the crucial
point of the research (Şenöz-Ayata, 2005). Scientific texts provide meta-language and readers
should have background knowledge in order to understand them. In a scientific text, it is also
possible to come across some technical terms which can only be understood by target readers.
In addition to these properties, target readers also may need the ability of interpretation while
reaching to a conclusion during the reading process. Therefore scientific texts include a
common message for its readers different from some other kind of texts such as stories,
poems, and etc. Ögeyik (2004) refers to the degree of interpretation of texts in a reader
focused approach which is common in written texts. However scientific texts do not permit
different interpretations since they include a certain message for the readers.
In this respect, some studies mainly focus on different types of textlinguistic analyses
for highlighting the workings of textlinguistic approach to describe the textuality of the texts;
for instance, Coşgun-Ögeyik (2010) investigates the attitudes of prospective teachers of
English towards linguistic courses and textlinguistic descriptions in particular. Güvendir
(2006) describes how textuality and seven criteria are used in various texts; Akyay (2010)
interrelates textlinguistic data to decode and encode texts in translation studies. Medina
(2003) emphasizes the importance of textlinguistics in foreign language teaching and found
out that textlinguistics provides students with an opportunity to take the first steps in text
analysis. Erer (2006) investigates the problematic areas in paragraph translation and offers
textlinguistic approach for decoding such areas. Coşgun-Ögeyik (2010) uses textlinguistic
criteria to decode the national exam “YDS” (foreign language exam) and offers some
alternative ways to respond the questions in the exam by using these criteria. In all these
studies, the main aim is to underline the importance of textlinguistic approach to decode and
encode various types of texts.`;
		control(text);
}

document.querySelector("#button2").onclick = function(){
	text = `Тамань - самый скверный городишко из всех приморских городов России. Я там чуть-чуть не умер с голода, да еще в добавок меня хотели утопить. Я приехал на перекладной тележке поздно ночью. Ямщик остановил усталую тройку у ворот единственного каменного дома, что при въезде. Часовой, черноморский казак, услышав звон колокольчика, закричал спросонья диким голосом: «Кто идет?» Вышел урядник и десятник. Я им объяснил, что я офицер, еду в действующий отряд по казенной надобности, и стал требовать казенную квартиру. Десятник нас повел по городу. К которой избе ни подъедем - занята. Было холодно, я три ночи не спал, измучился и начинал сердиться. «Веди меня куда-нибудь, разбойник! хоть к черту, только к месту!» - закричал я. «Есть еще одна фатера, - отвечал десятник, почесывая затылок, - только вашему благородию не понравится; там нечисто!» Не поняв точного значения последнего слова, я велел ему идти вперед и после долгого странствования по грязным переулкам, где по сторонам я видел одни только ветхие заборы, мы подъехали к небольшой хате на самом берегу моря.
Полный месяц светил на камышовую крышу и белые стены моего нового жилища; на дворе, обведенном оградой из булыжника, стояла избочась другая лачужка, менее и древнее первой. Берег обрывом спускался к морю почти у самых стен ее, и внизу с беспрерывным ропотом плескались темно-синие волны. Луна тихо смотрела на беспокойную, но покорную ей стихию, и я мог различить при свете ее, далеко от берега, два корабля, которых черные снасти, подобно паутине, неподвижно рисовались на бледной черте небосклона. «Суда в пристани есть, - подумал я, - завтра отправлюсь в Геленджик».
При мне исправлял должность денщика линейский казак. Велев ему выложить чемодан и отпустить извозчика, я стал звать хозяина - молчат; стучу - молчат... что это? Наконец из сеней выполз мальчик лет четырнадцати.
«Где хозяин?» - «Нема». - «Как? совсем нету?» - «Совсим». - «А хозяйка?» - «Побигла в слободку». - «Кто же мне отопрет дверь?» - сказал я, ударив в нее ногою. Дверь сама отворилась; из хаты повеяло сыростью. Я засветил серную спичку и поднес ее к носу мальчика: она озарила два белые глаза. Он был слепой, совершенно слепой от природы. Он стоял передо мною неподвижно, и я начал рассматривать черты его лица.
Признаюсь, я имею сильное предубеждение против всех слепых, кривых, глухих, немых, безногих, безруких, горбатых и проч. Я замечал, что всегда есть какое-то странное отношение между наружностью человека и его душою: как будто с потерею члена душа теряет какое-нибудь чувство.
Итак, я начал рассматривать лицо слепого; но что прикажете прочитать на лице, у которого нет глаз? Долго я глядел на него с небольшим сожалением, как вдруг едва приметная улыбка пробежала по тонким губам его, и, не знаю отчего, она произвела на меня самое неприятное впечатление. В голове моей родилось подозрение, что этот слепой не так слеп, как оно кажется; напрасно я старался уверить себя, что бельмы подделать невозможно, да и с какой целью? Но что делать? я часто склонен к предубеждениям...
«Ты хозяйский сын?» - спросил я его наконец. - «Ни». - «Кто же ты?» - «Сирота, убогой». - «А у хозяйки есть дети?» - «Ни; была дочь, да утикла за море с татарином». - «С каким татарином?» - «А бис его знает! крымский татарин, лодочник из Керчи».
Я взошел в хату: две лавки и стол, да огромный сундук возле печи составляли всю его мебель. На стене ни одного образа - дурной знак! В разбитое стекло врывался морской ветер. Я вытащил из чемодана восковой огарок и, засветив его, стал раскладывать вещи, поставил в угол шашку и ружье, пистолеты положил на стол, разостлал бурку на лавке, казак свою на другой; через десять минут он захрапел, но я не мог заснуть: передо мной во мраке все вертелся мальчик с белыми глазами.
Так прошло около часа. Месяц светил в окно, и луч его играл по земляному полу хаты. Вдруг на яркой полосе, пересекающей пол, промелькнула тень. Я привстал и взглянул в окно: кто-то вторично пробежал мимо его и скрылся Бог знает куда. Я не мог полагать, чтоб это существо сбежало по отвесу берега; однако иначе ему некуда было деваться. Я встал, накинул бешмет, опоясал кинжал и тихо-тихо вышел из хаты; навстречу мне слепой мальчик. Я притаился у забора, и он верной, но осторожной поступью прошел мимо меня. Под мышкой он нес какой-то узел, и повернув к пристани, стал спускаться по узкой и крутой тропинке. «В тот день немые возопиют и слепые прозрят», - подумал я, следуя за ним в таком расстоянии, чтоб не терять его из вида.
Между тем луна начала одеваться тучами и на море поднялся туман; едва сквозь него светился фонарь на корме ближнего корабля; у берега сверкала пена валунов, ежеминутно грозящих его потопить. Я, с трудом спускаясь, пробирался по крутизне, и вот вижу: слепой приостановился, потом повернул низом направо; он шел так близко от воды, что казалось, сейчас волна его схватит и унесет, но видно, это была не первая его прогулка, судя по уверенности, с которой он ступал с камня на камень и избегал рытвин. Наконец он остановился, будто прислушиваясь к чему-то, присел на землю и положил возле себя узел. Я наблюдал за его движениями, спрятавшись за выдавшеюся скалою берега. Спустя несколько минут с противоположной стороны показалась белая фигура; она подошла к слепому и села возле него. Ветер по временам приносил мне их разговор.
- Что, слепой? - сказал женский голос, - буря сильна. Янко не будет.
- Янко не боится бури, отвечал тот.
- Туман густеет, - возразил опять женский голос с выражением печали.
- В тумане лучше пробраться мимо сторожевых судов, - был ответ.
- А если он утонет?
- Ну что ж? в воскресенье ты пойдешь в церковь без новой ленты.
Последовало молчание; меня, однако поразило одно: слепой говорил со мною малороссийским наречием, а теперь изъяснялся чисто по-русски.
- Видишь, я прав, - сказал опять слепой, ударив в ладоши, - Янко не боится ни моря, ни ветров, ни тумана, ни береговых сторожей; это не вода плещет, меня не обманешь, - это его длинные весла.
Женщина вскочила и стала всматриваться в даль с видом беспокойства.
- Ты бредишь, слепой, - сказала она, - я ничего не вижу.
Признаюсь, сколько я ни старался различить вдалеке что-нибудь наподобие лодки, но безуспешно. Так прошло минут десять; и вот показалась между горами волн черная точка; она то увеличивалась, то уменьшалась. Медленно поднимаясь на хребты волн, быстро спускаясь с них, приближалась к берегу лодка. Отважен был пловец, решившийся в такую ночь пуститься через пролив на расстояние двадцати верст, и важная должна быть причина, его к тому побудившая! Думая так, я с невольном биением сердца глядел на бедную лодку; но она, как утка, ныряла и потом, быстро взмахнув веслами, будто крыльями, выскакивала из пропасти среди брызгов пены; и вот, я думал, она ударится с размаха об берег и разлетится вдребезги; но она ловко повернулась боком и вскочила в маленькую бухту невредима. Из нее вышел человек среднего роста, в татарской бараньей шапке; он махнул рукою, и все трое принялись вытаскивать что-то из лодки; груз был так велик, что я до сих пор не понимаю, как она не потонула. Взяв на плечи каждый по узлу, они пустились вдоль по берегу, и скоро я потерял их из вида. Надо было вернуться домой; но, признаюсь, все эти странности меня тревожили, и я насилу дождался утра.
Казак мой был очень удивлен, когда, проснувшись, увидел меня совсем одетого; я ему, однако ж, не сказал причины. Полюбовавшись несколько времени из окна на голубое небо, усеянное разорванными облачками, на дальний берег Крыма, который тянется лиловой полосой и кончается утесом, на вершине коего белеется маячная башня, я отправился в крепость Фанагорию, чтоб узнать от коменданта о часе моего отъезда в Геленджик.
Но, увы; комендант ничего не мог сказать мне решительного. Суда, стоящие в пристани, были все - или сторожевые, или купеческие, которые еще даже не начинали нагружаться. «Может быть, дня через три, четыре придет почтовое судно, сказал комендант, - и тогда - мы увидим». Я вернулся домой угрюм и сердит. Меня в дверях встретил казак мой с испуганным лицом.
- Плохо, ваше благородие! - сказал он мне.
- Да, брат, Бог знает когда мы отсюда уедем! - Тут он еще больше встревожился и, наклонясь ко мне, сказал шепотом:
- Здесь нечисто! Я встретил сегодня черноморского урядника, он мне знаком - был прошлого года в отряде, как я ему сказал, где мы остановились, а он мне: «Здесь, брат, нечисто, люди недобрые!..» Да и в самом деле, что это за слепой! ходит везде один, и на базар, за хлебом, и за водой... уж видно, здесь к этому привыкли.
- Да что ж? по крайней мере показалась ли хозяйка?
- Сегодня без вас пришла старуха и с ней дочь.
- Какая дочь? У нее нет дочери.
- А Бог ее знает, кто она, коли не дочь; да вон старуха сидит теперь в своей хате.
Я взошел в лачужку. Печь была жарко натоплена, и в ней варился обед, довольно роскошный для бедняков. Старуха на все мои вопросы отвечала, что она глухая, не слышит. Что было с ней делать? Я обратился к слепому, который сидел перед печью и подкладывал в огонь хворост. «Ну-ка, слепой чертенок, - сказал я, взяв его за ухо, - говори, куда ты ночью таскался с узлом, а?» Вдруг мой слепой заплакал, закричал, заохал: «Куды я ходив?.. никуды не ходив... с узлом? яким узлом?» Старуха на этот раз услышала и стала ворчать: «Вот выдумывают, да еще на убогого! за что вы его? что он вам сделал?» Мне это надоело, и я вышел, твердо решившись достать ключ этой загадки.
Я завернулся в бурку и сел у забора на камень, поглядывая вдаль; передо мной тянулось ночною бурею взволнованное море, и однообразный шум его, подобный ропоту засыпающегося города, напомнил мне старые годы, перенес мои мысли на север, в нашу холодную столицу. Волнуемый воспоминаниями, я забылся... Так прошло около часа, может быть и более... Вдруг что-то похожее на песню поразило мой слух. Точно, это была песня, и женский, свежий голосок, - но откуда?.. Прислушиваюсь - напев старинный, то протяжный и печальный, то быстрый и живой. Оглядываюсь - никого нет кругом; прислушиваюсь снова - звуки как будто падают с неба. Я поднял глаза: на крыше хаты моей стояла девушка в полосатом платье с распущенными косами, настоящая русалка. Защитив глаза ладонью от лучей солнца, она пристально всматривалась в даль, то смеялась и рассуждала сама с собой, то запевала снова песню.`;
	control(text);
}

document.querySelector("#button3").onclick = function(){
	var alphabet = "абвг деёжзийклмноп рстуфхцчш щъыьэюя ЙЦУК ЕНГШЩ ЗХЪФЫВАП	 РОЛДЖЭ ЯЧСМ ИТЬБЮ ";
 	var randomIndex = 0;
 	var randomString = '';
 	for (var i=0 ; i<1000;i++){
 		randomIndex = Math.floor(Math.random() * alphabet.length) // здесь и в следующем элементе я составляю случайную строку длиной 1000 символов из символов русского и английского алфавита соответственно
 		randomString += alphabet[randomIndex];
	}
	control(randomString);
}

document.querySelector("#button4").onclick = function(){
	var alphabet = "QWER TYUI OPASDF GGHJKLZXC VBNM,. qwerty 	uiopasfghjklzx cvbnm,.";
	var randomIndex = 0;
 	var randomString = '';
 	for (var i=0 ; i<1000;i++){
 		randomIndex = Math.floor(Math.random() * alphabet.length)
 		randomString += alphabet[randomIndex];
	}
	control(randomString);
}

function control(text){

const chast = createchast(text);
//console.log(chast);

init();

function init(){
	input.addEventListener("keydown", keydownHandler);// отслеживаем событие нажатия клавиши

	input.addEventListener("keyup", keyupHandler); // отслеживаем событие отпускания клавиш

	viewUpdate();
}

function keydownHandler(event){
	event.preventDefault();
	const letter = letters.find((x) => x.dataset.letters.includes(event.key)); // далее этот приём будет часто повторяться, поэтому распишу подробнее что здесь происходит
																 			  // в общем мы имеем массив letters, к нему мы применяем метод find и пытаемся найти в dataset-e (им называется любой элемент, у которого в начале есть data)
																 			  // строку, в которой пытаемся найти подстроку, содержащую элемент event.key ==> таким образом мы понимаем, какую клавишу нам надо прожать.

	if (letter){
		press(event.key);
		letter.classList.add("pressed");//добавляю нажатой букве сласс pressed
		return;
	}

	let key = event.key.toLowerCase();//перевожу наименование клавиши в нижний регистр

	if (key === ' '){
		key = 'space';
		press(" ");
	}

	if (key === "enter"){
		press('\n');
	}

	const ownSpecs = specs.filter((x) => x.dataset.spec === key);

	if (ownSpecs){
		ownSpecs.forEach((spec) => spec.classList.add("pressed")) // некоторые спец клавиши на клаве дублируются, поэтому эстетичности ради я их продублировал и тут
		return;
	}
}

function keyupHandler(event){
	event.preventDefault();// эта штука позволяет не реагировать странице на нажатие специальных символов типа enter, tab и прочих
	const letter = letters.find((x) => x.dataset.letters.includes(event.key));

	if (letter){
		letter.classList.remove("pressed");// здесь мы уже убираем у буквы класс pressed 
		return;
	}

	let key = event.key.toLowerCase();

	if (key === ' '){
		key = 'space';
	}

	const ownSpecs = specs.filter((x) => x.dataset.spec === key);

	if (ownSpecs){
		ownSpecs.forEach((spec) => spec.classList.remove("pressed"))
		return;
	}
}


function createchast(text){ //если прям вобще тупняк --> подсказка: формируем объект 
	const chast = {
		text,
		strings: [],
		maxStringLength: 60,
		maxShowStrings: 4,
		currentStringIndex: 0,
		currentPressedIndex: 0,
		errors: [],
		start: false,

		statFlag: false, //флаг начала печати строки
		timeCounter: 0, // время, которое нам потребовалось, чтобы напечатать текста
		startTime: 0, //тоже флаг начала печати строки, но когда мы заканчиваем, таймер будет обновляться
		errorCounter: 0, // количество ошибок
		counter: 0, //сколько напечатано символов
	};

	chast.text = chast.text.replace(/\n/g, "\n ");
	const words = chast.text.split(" ");

	let string = [];
	for (const word of words){
		const newStringLength = [...string, word].join(" ").length + !word.includes("\n");

		// что происходит? В общем, я предварительно создаю новую строку, из символоа которые уже хранятся в
		// string и символов, которые мы перебираем (это типа word), объединяем их с помощью пробела
		// и принимаем новую длину строки

		if (newStringLength > chast.maxStringLength){
			chast.strings.push(string.join(" ") + " ");
			string = [];
		}

		string.push(word);

		if (word.includes("\n")){
			chast.strings.push(string.join(" ")); // здесь мы учитываем особенности текста и 
			string = [];
		}

	}

	if (string.length) {
		chast.strings.push(string.join(" "));
	}

	//console.log(words);

	return chast;
}

function press(letter) {
	chast.start = true;
	if (!chast.statFlag){
		chast.statFlag = true;
		chast.startTime = Date.now()
	}
	const string = chast.strings[chast.currentStringIndex];
	const needLetter = string[chast.currentPressedIndex];

	if (letter === needLetter){
		chast.currentPressedIndex++;

		if (string.length <= chast.currentPressedIndex) {
			chast.currentPressedIndex = 0;
			chast.currentStringIndex++;

			chast.statFlag = false;
			chast.timeCounter = Date.now() - chast.startTime; // здесь рассчтывается время с начала печати или типа того для дальнейшего расчёта кол-ва символов в минуту

		}

	}else if (!chast.errors.includes(needLetter)){
		chast.errors.push(needLetter);
		chast.errorCounter++;
	}

	chast.counter++;

	viewUpdate();
}

function viewUpdate() {
	const string = chast.strings[chast.currentStringIndex];

	const showedStrings = chast.strings.slice(chast.currentStringIndex, chast.currentStringIndex + chast.maxShowStrings);
	const div = document.createElement('div');

	const firstLine = document.createElement('div');
	firstLine.classList.add('line');
	div.append(firstLine);

	const done = document.createElement('span');
	done.classList.add('done');
	done.textContent = string.slice(0, chast.currentPressedIndex);
	firstLine.append(
		done,
		...string.  // примечание: ... позволяет расширить доступные для итерации элементы
			slice(chast.currentPressedIndex)
			.split('')
			.map((letter) => {

				if (chast.errors.includes(letter)){  // собственно говоря, если мы ошиблись в символе, мы далее формируем errorspan, которому мы добавляем класс hint и присваиваем контент симвлоа
					console.log(chast.errors)
					const errorSpan = document.createElement('span')
					errorSpan.classList.add('hint');
					errorSpan.textContent = letter;
					console.log(errorSpan);
					return errorSpan
				};

				return letter;
			})
	);

	for (let i = 1; i < showedStrings.length;i++){
		const line = document.createElement('div');
		line.classList.add('line');
		div.append(line);

		line.append(
				...showedStrings[i].split('').map((letter) => { 
				if (chast.errors.includes(letter)){
					const errorSpan = document.createElement('span')
					errorSpan.classList.add('hint');
					errorSpan.textContent = letter;
					return errorSpan

				};

				return letter;
			})
		);

	}


	textExample.innerHTML = '';
	textExample.append(div);

	input.value = string.slice(0, chast.currentPressedIndex);

	if (!chast.statFlag && chast.start){
		symbolsPerMinute.textContent = Math.round(chast.counter / (chast.timeCounter / 60000));
		errorPercent.textContent = Math.floor((10000 * chast.errorCounter) / chast.counter /100) + '%'
		if (Math.floor((10000 * chast.errorCounter) / chast.counter /100) < 5) {
			var slova = ['Ну, теперь ты хоть печатать умеешь...', "Ура, ты это сделал...Доволен?","годы идут, а ты всё печатаешь...","ты хорошо постарался, теперь можешь отдыхать","от души и почек дарю тебе цветочек, ты - умничка","чел, суперультрамегадуперхоршо"];
			document.querySelector("#achive").textContent = slova[Math.floor(Math.random()* slova.length)];
		} else {
			if(Math.floor((10000 * chast.errorCounter) / chast.counter /100) > 5 && Math.floor((10000 * chast.errorCounter) / chast.counter /100) < 20){
				var slova = ['какое разочарование... и это, глядя на клавиатуру', 'Зачем ты это делаешь? остановись...', "попробуй ещё разок, я даже разрешу тебе смотреть на клавиатуру", "Слепая печать - явно не твоё, лучше пойди и погуляй...", "смирись с поражением"]
				document.querySelector("#achive").textContent = slova[Math.floor(Math.random()* slova.length)];
			}
		}
	}
} 
}