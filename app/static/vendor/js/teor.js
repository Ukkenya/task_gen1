
klas.onclick = function(){
    let elem = document.querySelector('#textteor');
    elem.innerHTML = `
    <pre>
<b>Вероятностью наступления случайного события A</b>, обозначается p(A), называется численная мера возможности
наступления события в испытании.

<b>Существует несколько способов подсчета вероятности, но во всех этих определениях предполагается, что:</b>
1) вероятность достоверного события, которое обозначается через Ω или U, равна единице, т.е. p(U) = 1 или
p(Ω) = 1;
2) вероятность невозможного события, которое обозначается через ∅, равна нулю, т.е. p(∅) = 0;
3) для произвольного случайного события A: 0 ≤ p(A) ≤ 1.

Предположим, что в некотором испытании выполняются условия:
1) число исходов конечно и равно n;
2) все исходы равновозможны;
3) обозначим через m(A) – число исходов, при которых происходит событие A.
Тогда вероятность события p(A) принимается равной отношению:
<img src="https://dxdt.ru/f?p%28A%29%20%3D%20%5Cfrac%7BM%28A%29%7D%7Bn%7D" alt="LaTeX-enabled image" />.
Исходы, при которых наступает событие, называют <b>благоприятствующими этому событию</b>. И тогда формулу,
введенную в классическом определении, можно прочитать так: вероятность события, которое может наступить в
некотором испытании, равна отношению числа исходов, благоприятствующих этому
событию, к общему числу исходов.
<b>Для обозначения событий принято использовать заглавные буквы латинского
алфавита A, B, C…, а также букву греческого алфавита строчную ω, заглавную Ω.</b>

Рассмотрим испытание с подбрасыванием кубика.
В этом испытании могут произойти, например, следующие события:
A - выпало четное число;
B – выпало нечетное число;
C – выпало число кратное трем;
D – выпавшее число не меньше трех;
E – выпавшее число не больше четырех;
ω_1 - выпала единица;
ω_2 - выпала двойка
…
ω_6 - выпала шестерка
Число всех исходов n=6, а для введенных событий A,B,C,D,E имеем m(A) = 3 ⇒ p(A) = 3/6 = 1/2;
m(B) = 3 ⇒ p(A) = 3/6 = 1/2 и далее p(C) = 2/6 = 1/3; p(D) = 4/6 = 2/3; p(E) = 4/6 = 2/3;
p(ω_1 ) = p(ω_2 ) = ⋯ = p(ω_6 ) = 1/6.
Многие задачи теории вероятностей могут быть решены с использованием классической формулы, однако, еще больше
задач, в которых эта формула не может быть применена.

<b>Недостатки классического определения:</b>
а) число исходов в испытании может быть бесконечным;
б) исходы могут быть не равновозможными;
в) не всегда можно определить исход.
</pre>`;
}
geom.onclick = function(){
    let elem = document.querySelector('#textteor');
    elem.innerHTML = `
    <pre>
<b>Геометрической вероятностью события  А</b> называется отношение меры области, благоприятствующей появлению
события А , к мере всей области.

Пусть случайное испытание можно представить себе как бросание точки наудачу в некоторую геометрическую область
G (на прямой, плоскости или пространстве).

<b>Элементарные исходы</b> – это отдельные точки G, <b>любое событие A</b> – это подмножество этой области,
пространства элементарных исходов G. Если для простоты считать, что все точки G «равноправны» (выбор точек
равномерен внутри области), то вероятность попадания точки в некоторое подмножество пропорционально его мере
(длине, площади, объему) и не зависит от его расположения и формы.

<b>Пример 1:</b>
Внутри круга радиусом R наудачу брошена точка. Найти вероятность того, что точка окажется внутри вписанного
в круг правильного шестиугольника.
Решение:
Вероятность того, что точка окажется внутри вписанного в круг правильного шестиугольника:
<img src="https://dxdt.ru/f?p%20%3D%20%5Cfrac%7BS1%7D%7BS2%7D%0A" alt="LaTeX-enabled image" />, где S1 - площадь шестиугольника, S2 - площадь круга.

Площадь правильного многоугольника с числом сторон , вписанного в окружность радиуса R составляет:
<img src="https://dxdt.ru/f?S%20%3D%20%5Cfrac%7Bn%7D%7B2%7D%20R%5E2%20%5Csin%7B%5Cfrac%7B2%5Cpi%7D%7B%5Cpi%7D%7D%0A" alt="LaTeX-enabled image" />
<img src="https://dxdt.ru/f?S1%20%3D%20%5Cfrac%7B6%7D%7B2%7D%20R%5E2%20%5Csin%7B%5Cfrac%7B%5Cpi%7D%7B3%7D%7D%0A" alt="LaTeX-enabled image" />

Площадь круга:
<img src="https://dxdt.ru/f?S2%20%3D%20%5Cpi%20R%5E2%20%0A" alt="LaTeX-enabled image" />

Искомая вероятность:

<img src="https://dxdt.ru/f?p%20%3D%20%5Cfrac%7B3%5Cfrac%7B%5Csqrt%7B3%7D%7D%7B2%7D%20R%5E2%7D%7B%5Cpi%20R%5E2%7D%20%3D%20%5Cfrac%7B3%5Cfrac%7B%5Csqrt%7B3%7D%7D%7B2%7D%7D%7B%5Cpi%7D%20%3D%200.827" alt="LaTeX-enabled image" />

Ответ: p = 0.827

<b>Пример 2:</b>
В квадрат со стороной 4 см «бросают» точку. Какова вероятность, что расстояние от этой точки до ближайшей
стороны квадрата будет меньше 1 см?
Площадь закрашенной части квадрата:
16 см^2 - 4 см^2 = 12 см^2
Значит, P(A) = 12 / 16 = 3/4 = 0.75
</pre>`
}

slozh.onclick = function(){
    let elem = document.querySelector('#textteor');
    elem.innerHTML = `
    <pre>
<b>Сложение вероятностей происходит, когда мы хотим вычислить вероятность события, которое может произойти по
крайней мере одно из двух непересекающихся событий.</b>
Пусть у нас есть два события A и B. Вероятность того, что произойдет событие A или B (обозначается как A ∪ B),
вычисляется следующим образом:

P(A ∪ B) = P(A) + P(B) - P(A ∩ B).

Здесь P(A) обозначает вероятность события A, P(B) - вероятность события B, а P(A ∩ B) - вероятность
пересечения событий A и B.

Пример:
Предположим, что у нас есть событие A - "выпадение решки" (вероятность P(A) = 0.5) и событие B - "выпадение
орла" (вероятность P(B) = 0.3). События A и B являются непересекающимися. Тогда вероятность того, что выпадет
решка или орел на монете (A ∪ B), будет:

P(A ∪ B) = P(A) + P(B) = 0.5 + 0.3 = 0.8.

Таким образом, вероятность выпадения решки или орла составляет 0.8.
Теперь перейдем к умножению вероятностей.

<b>Умножение вероятностей применяется, когда мы хотим вычислить вероятность двух независимых событий,
происходящих одновременно.</b>

Пусть у нас есть два независимых события A и B. Вероятность того, что произойдут оба события A и B
(обозначается как A ∩ B), вычисляется следующим образом:

P(A ∩ B) = P(A) × P(B).

<b>Таким образом, для независимых событий вероятность появления обоих событий равна произведению их вероятностей.</b>

Пример:
Предположим, что у нас есть событие A - "выпадение решки" (вероятность P(A) = 0.5) и событие B - "выпадение 6
на игральной кости" (вероятность P(B) = 1/6). Предполагая, что выпадение решки и выпадение 6 на кости -
независимые события, мы можем вычислить вероятность того, что произойдут оба события:

P(A ∩ B) = P(A) × P(B) = 0.5 × 1/6 = 1/12.

Таким образом, вероятность выпадения решки и 6 на кости одновременно составляет 1/12.

<b>Однако стоит отметить, что сложение и умножение вероятностей имеют свои ограничения и применимы только в
определенных условиях.</b> Например, формулы сложения и умножения вероятностей применимы только для независимых
событий, и могут изменяться в случае зависимых событий. Поэтому, в каждой конкретной ситуации, важно тщательно
анализировать условия и проверять применимость этих формул.
</pre>`
}

poln.onclick = function(){
    let elem = document.querySelector('#textteor');
    elem.innerHTML = `
    <pre>
<b>Теорема.</b> Пусть событие A может произойти при наступлении одного из попарно несовместных событий H_1,
H_2,…, H_n, образующих полную группу событий, тогда справедлива формула:

p(A) = p(H_1)∙p(A/H_1) + p(H_2)∙p(A/H_2) + ⋯ + p(H_n)∙p(A/H_n)

Эта формула называется формулой полной вероятности.
С использованием знака суммирования эту формулу записывают так:

<img src="https://dxdt.ru/f?p%28A%29%20%3D%20%5Csum_%7Bi%3D0%7D%5En%20p%28H_i%29*p%28A/H_i%29" alt="LaTeX-enabled image" />

<b>Доказательство.</b>

Пусть Ω - пространство событий. Для любого события A ⸦ Ω справедливо равенство: A ∩ Ω = A. Так как события
образуют полную группу событий, то Ω = H_1 ∩ H_2 ∩ ... ∩ H_n. Тогда A = A ∩ Ω = A ∩ (H_1 ∩ H_2 ∩ ...∩ H_n) =
(A ∩ H_1) ∪ (A ∩ H_2) ∪ ... ∪ (A ∩ H_n), т.е. A = (A ∩ H_1) ∪ (A ∩ H_2) ∪ ... ∪ (A ∩ H_n).
Скобки в правой части поставлены для выделения слагаемых вида A ∩ H_i. События слева и справа в последнем
равенстве эквивалентны, следовательно: p(A) = p((A ∩ H_1) + (A ∩ H_2) + ... + (A ∩ H_n)).

Так как по условию H_1, H_2, ..., H_n попарно несовместны, то попарно несовместны и все слагаемые вида
A ∩ H_i. И тогда для несовместных событий A ∩ H_i, i = 1,2,...,n имеем p(A) = p (A ∩ H_1) + p (A ∩ H_2)
+ ... + p(A ∩ H_n). Далее для каждого слагаемого вида p(A ∩ H_i) по теореме умножения вероятностей имеем
p (A ∩ H_i) = p (H_i)∙p(A/H_i). В итоге получаем то равенство, которое требовалось доказать.

<b>Пример.</b> В студенческой группе 25 человек, из которых 4 «отличника», 13 «хорошистов» и 8 «троечников».
Задачу, предложенную проверяющим, «отличник» может решить с вероятностью 0,8; «хорошист» - с вероятностью 0,6;
«троечник» - с вероятностью 0,4. Найти вероятность того, что наугад выбранный студент решит задачу.

<b>Решение.</b>  Пусть событие A  -  задача решена; H_1 - был выбран «отличник»; H_2 - был выбран «хорошист»;
H_3 - был выбран «троечник». Из условия следует, что p(H_1) = 4/25 = 0,16; p(H_2 ) = 13/25 = 0,52 ;
p(H_3) = 8/25 = 0,32.

В этих обозначениях, заданные в условии вероятности 0,8; 0,6; 0,4 являются условными вероятностями:
p(A/H_1) = 0,8; p(A/H_2) = 0,6; p(A/H_3) = 0,4. В итоге по формуле полной вероятности
p(A) = p(H_1)∙p(A/H_1) + p(H_2)∙p(A/H_2) + p(H_3)∙p(A/H_3)=0,16∙0,8 + 0,52∙0,6 + 0,32∙0,4 = 0,568
</pre>`
}

lapl.onclick = function(){
    let elem = document.querySelector('#textteor');
    elem.innerHTML = `
    <pre>
<b>Локальная теорема Муавра – Лапласа:</b>

Если вероятность p появления события А в каждом опыте постоянна и отличается от 0 и 1, то вероятность P (m, n)
того, что событие А произойдет m раз в n независимых опытах при достаточно большом числе n, приближенно равна:

<img src="https://dxdt.ru/f?P_%7Bn%7D%28m%29%20%3D%20%5Cfrac%7B1%7D%7B%5Csqrt%7Bnpq%7D%7D%5Cphi%28x%29" alt="LaTeX-enabled image" />, где <img src="https://dxdt.ru/f?%5Cphi%28x%29%20%3D%20%5Cfrac%7B1%7D%7B%5Csqrt%7B2%5Cpi%7D%7De%5E%7B-%5Cfrac%7Bx%5E2%7D%7B2%7D%7D%2C%20x%20%3D%20%5Cfrac%7Bm-np%7D%7B%5Csqrt%7Bnpq%7D%7D" alt="LaTeX-enabled image" />.

Погрешность будет незначительной, если npq ≥ 20.

<b>Пример.</b>
В некотором районе вероятность для ученика не набрать минимальные баллы ЕГЭ 0,05 (будем считать ее постоянной).
Какова вероятность того, что из 1000 учащихся 40 не сдадут ЕГЭ?

<b>Решение.</b>
По условию n = 1000, m = 40, p = 0,05, тогда q = 1 - 0,05 = 0,95. Воспользуемся формулой Муавра-Лапласа:
npq = 1000*0,05*0,95 = 47,5 > 20.

Найдем <img src="https://dxdt.ru/f?x%20%3D%20%5Cfrac%7Bm-np%7D%7B%5Csqrt%7Bnpq%7D%7D%20%3D%5Cfrac%7B40-1000*0%2C05%7D%7B%5Csqrt%7B47%2C5%7D%7D%20%5Capprox%20-%201%2C45" alt="LaTeX-enabled image" />.

По таблице находим, что <img src="https://dxdt.ru/f?%5Cphi%28-1%2C45%29%20%5Capprox%200%2C1394" alt="LaTeX-enabled image" />.

Следовательно, <img src="https://dxdt.ru/f?P_%7B1000%7D%2840%29%20%3D%20%5Cfrac%7B1%7D%7B%5Csqrt%7Bnpq%7D%7D%5Cphi%28x%29%20%3D%20%5Cfrac%7B0%2C1394%7D%7B6%2C892%7D%20%3D%200%2C02." alt="LaTeX-enabled image" />

</pre>`
}

puas.onclick = function(){
    let elem = document.querySelector('#textteor');
    elem.innerHTML = `
    <pre>
Дискретная случайная величина называется <b>распределенной по закону Пуассона</b>, если она может принимать любые
целые неотрицательные значения  0, 1, 2..., m,..., а вероятность того, что <img src="https://dxdt.ru/f?%5Cxi" alt="LaTeX-enabled image" /> примет значение равное m, задается
формулой, которую называют формулой Пуассона и которая имеет вид:
<img src="https://dxdt.ru/f?p%28%5Cxi%3Dm%29%20%3D%20%5Cfrac%7B%5Clambda%5Em%7D%7Bm%21%7De%5E%7B-%5Clambda%7D" alt="LaTeX-enabled image" />, где число <img src="https://dxdt.ru/f?%5Clambda%20%3E%200" alt="LaTeX-enabled image" /> является единственным параметром этого распределения.

<b>Ряд распределения</b> для этой случайной величины записывают следующим образом:

        0	1	 2	 ...
<img src="https://dxdt.ru/f?%5Cxi%3A" alt="LaTeX-enabled image" />
      <img src="https://dxdt.ru/f?e%5E%7B-%5Clambda%7D" alt="LaTeX-enabled image" />  <img src="https://dxdt.ru/f?%5Cfrac%7B%5Clambda%7D%7B1%21%7De%5E%7B-%5Clambda%7D" alt="LaTeX-enabled image" />  <img src="https://dxdt.ru/f?%5Cfrac%7B%5Clambda%5E2%7D%7B2%21%7De%5E%7B-%5Clambda%7D" alt="LaTeX-enabled image" />     ...

При одновременном выполнении условий n > 100, а   (где n – число испытаний Бернулли, p – вероятность
интересующего нас события) в большинстве случаев можно пользоваться вместо формулы Бернулли, дающей точное
значение вероятности p(m), формулой Пуассона, полагая для нее параметр <img src="https://dxdt.ru/f?%5Clambda%20%3D%20np" alt="LaTeX-enabled image" />, которая дает приближенное
значение той же вероятности, т.е.
<img src="https://dxdt.ru/f?p_%7Bn%7D%28m%29%20%3D%20C_n%5E%7Bm%7Dp%5E%7Bm%7D%281%20-%20p%29%5E%7Bn-m%7D%20%5Capprox%20%5Cfrac%7B%5Clambda%5E%7Bm%7D%7D%7Bm%21%7De%5E%7B-%5Clambda%7D" alt="LaTeX-enabled image" />

<b>Пример.</b>
Магазин получил 1000 бутылок минеральной воды. Вероятность того, что при перевозке бутылка окажется разбитой,
равна 0,003. Найти вероятности того, что магазин получит разбитых бутылок: а) ровно две; б) менее двух;
в) более двух; г) хотя бы одну.

<b>Решение.</b>
n = 1000, p = 0,003
а) m = 2, λ = n · p = 1000 · 0,003 = 3
<img src="https://dxdt.ru/f?p_%7B1000%7D%282%29%20%3D%20%5Cfrac%7B3%5E2%7D%7B2%21%7De%5E%7B-3%7D%20%5Capprox%200%2C224" alt="LaTeX-enabled image" />
б) m ≤ 2, λ = 3
<img src="https://dxdt.ru/f?p_%7B1000%7D%280%29%20+%20p_%7B1000%7D%281%29%3D%20%5Cfrac%7B3%5E0%7D%7B0%21%7De%5E%7B-3%7D%20+%5Cfrac%7B3%5E1%7D%7B1%21%7De%5E%7B-3%7D%20%3D%20e%5E%7B-3%7D%20+%203e%5E%7B-3%7D%20%3D%20%204e%5E%7B-3%7D%20%5Capprox%200%2C1992" alt="LaTeX-enabled image" />
в) m > 2, λ = 3
<img src="https://dxdt.ru/f?p%20%3D%201%20-%20q%20%3D%201%20-%20%28p_%7B1000%7D%280%29%20+%20p_%7B1000%7D%281%29%20+%20p_%7B1000%7D%282%29%29%20%3D%201%20-%20%28%5Cfrac%7B3%5E0%7D%7B0%21%7De%5E%7B-3%7D%20+%20%5Cfrac%7B3%5E1%7D%7B1%21%7De%5E%7B-3%7D%20+%20%5Cfrac%7B3%5E2%7D%7B2%21%7De%5E%7B-3%7D%29%5Capprox%200%2C5786" alt="LaTeX-enabled image" />
 г) m != 0, λ = 3
<img src="https://dxdt.ru/f?p%20%3D%201%20-%20q%20%3D%201%20-%20p_%7B1000%7D%280%29%20%3D%201%20-%20%5Cfrac%7B3%5E0%7D%7B0%21%7De%5E%7B-3%7D%20%5Capprox%200%2C95" alt="LaTeX-enabled image" />
</pre>`
}

diskr.onclick = function(){
    let elem = document.querySelector('#textteor');
    elem.innerHTML = `
    <pre>
<b>Случайной величиной (с.в.)</b> называют величину, которая в результате испытания может принять некоторое
единственное, заранее неизвестное, значение из некоторого множества ее возможных значений. Если множество
возможных значений случайной величины конечно или бесконечно, но счётно, то такая случайная величина называется
<b>дискретной случайной величиной</b>.

Задаются случайные величины с помощью законов распределения, которые имеют вид: ряды распределения и функции
распределения. Принято обозначать случайные величины либо заглавными латинскими буквами X, Y, Z,…, либо строчными
греческими ξ, ƞ, ς,..., а принимаемые ими значения – строчными буквами x, y, z,...

Функция P(x), связывающая возможные значения случайной величины Х с соответствующими вероятностями называется
<b>законом распределения случайной величины</b>. Если случайная величина Х имеет данный закон распределения, то
про нее говорят, что она “распределена” по этому закону.
<b>Закон распределения можно задать</b> 1)таблично; 2)аналитически; 3)графически.

1) <b>Рядом распределения дискретной с.в. Х</b> называется таблица, в верхней строке которой перечислены в порядке
возрастания все возможные значения с.в. Х: х1, х2, …, хn, …, а в нижней вероятности этих значений: р1, р2, … рn,
..., где pi = P(X = xi) - вероятность того, что в результате опыта с.в. Х примет значение хi (i=1,2,…n).
Ряд распределения случайной величины Х будем записывать в виде таблицы.
2) Аналитически закон распределения задается при помощи формулы P(X = xi) = р(xi).
3) Графическое изображение ряда распределения называется многоугольником распределения. В прямоугольной системе
координат строят точки (хi, рi), а затем соединяют их отрезками прямых.

<b>ФУНКЦИЯ РАСПРЕДЕЛЕНИЯ</b>
Пусть дана некоторая случайная величина ξ.
Функцией распределения вероятностей случайной величины ξ называется определенная для всех x∈(-∞;∞)функция F(x),
значение которой задается равенством F(x) = p(ξ < x). Отметим, что функция распределения вероятностей F(x),
короче – функция распределения F(x), определена для всех действительных значений аргумента.
И для каждого x значение F(x) определяется вероятностью того, что при испытании случайная величина  ξ примет
значение меньшее аргумента x функции F(x). Если на числовой оси O отметить точку с абсциссой равной x, то значение
F(x) равно вероятности попадания ξ левее x.
Если идет речь о разных случайных величинах, например, ξ и ƞ, то для того, чтобы различать функции распределения
каждой из них, записывают F_ξ (x) и F_ƞ (x), показывая тем самым к какой случайной величине относится функция.
<b>Свойства функции распределения.</b>
Если F(x) - функция распределения случайной величины ξ, то эта функция удовлетворяет свойствам:
1) 0 ≤ F(x) ≤ 1
Свойство следует из определения значений функции, как вероятности.
2) F(x) - неубывающая функция, т.е. F(x_2) ≥ F(x_1), если x_2 > x_1. Доказательство. По определению F(x_2 ) =
p(ξ < x_2). Событие (ξ < x_2) можно представить в виде объединения двух несовместных событий: (ξ < x_1) и
ξ ∈ [x_1; x_2). Т.е. (ξ < x_2) = (ξ < x_1) + (ξ ∈ [x_1; x_2)). Тогда p(ξ < x_2) = p(ξ < x_1) + p( ξ∈[x_1; x_2)).
Т.е. F(x_2)= F(x_1) + p(ξ ∈ [x_1; x_2)). Так как p(ξ ∈ [x_1; x_2)) ≥ 0, то отбрасывая неотрицательное слагаемое,
получим, что F(x_2 ) ≥ F(x_1)
3)Из последнего равенства получаем следующее важное свойство функции распределения:
p(ξ ∈ [x_1; x_2 )) = F(x_2 ) - F(x_1 ).
Таким образом, вероятность того, что случайная величина ξ попадет в интервал [x_1;x_2 ), равна приращению функции
распределения F(x) на этом интервале.
4)Для любой случайной величины ξ событие (ξ<-∞) является невозможным, а событие (ξ < +∞) является достоверным,
поэтому F(-∞)=0, F(+∞)=1.
Если все возможные значения случайной величины ξ заключены в некотором интервале [a; b], то для всех x ≤ a
F(x) = 0, а для всех x>a F(x)=1.
Отметим, что все приведенные свойства функции распределения выполняются как для дискретных случайных величин,
так и для непрерывных случайных величин.
<b>Пример</b>
В коробке находятся 50 лотерейных билетов, среди которых 12 выигрышных, причём 2 из них выигрывают по 1000 рублей,
а остальные – по 100 рублей. Составить закон распределения случайной величины V – размера выигрыша, если из коробки
наугад извлекается один билет.
Решение: как вы заметили, значения случайной величины принято располагать в порядке их возрастания. Поэтому мы
начинаем с самого маленького выигрыша, и именно v_1 = 0 рублей.
Всего таковых билетов 50 – 12 = 38, и по классическому определению: p_1 = 38/50 = 0,76 – вероятность того, что
наудачу извлечённый билет окажется безвыигрышным.
С остальными случаями всё просто. Вероятность выигрыша v_2 = 100  рублей составляет: p_2 = 10/50 = 0,2. И для
v_3 = 1000: p_3 = 2/50 = 0,04. Проверка: p_1 + p_2 + p_3 = 0,76 + 0,2 + 0,04
Ответ: искомый закон распределения выигрыша:
V	 0	   100	1000
	0,76   0,2	0,04
</pre>`
}

norm.onclick = function(){
    let elem = document.querySelector('#textteor');
    elem.innerHTML = `
    <pre>
<b>Закон нормального распределения</b> — это статистический закон, который описывает, как часто различные значения
случайной величины встречаются в наборе данных. Он также известен как «закон Гаусса», или «закон распределения
Гаусса». Если сформулировать суть закона распределения Гаусса, то она будет звучать примерно так: значения
случайной величины будут сгруппированы вокруг среднего значения, и чем дальше от среднего значения, тем меньше
вероятность того, что такое значение появится.

Знание этого закона позволяет предсказать, насколько вероятно встретиться с какой-то величиной в горе случайных
значений. Нормальное распределение — наиболее часто встречающийся вид распределения. С ним имеют дело при анализе
погрешностей ошибок, контроле технологических процессов, при анализе и прогнозировании различных экономических,
социальных, демографических явлений. Наиболее важным условием возникновения нормального распределения является
формирование признака как суммы большого числа независимых слагаемых, ни одно из которых не характеризуется
исключительно большой по сравнению с другими дисперсией.

Еще одна причина, обусловливающая особое место этого закона распределения среди других, и главная особенность
нормального распределения состоит в том, что оно является предельным, к которому с ростом числа наблюдений
стремятся другие распределения.
<img src="https://dxdt.ru/f?f%28x%29%20%3D%20%5Cfrac%7B1%7D%7B%5Csigma%5Csqrt%7B2%5Cpi%7D%7De%5E%7B%5Cfrac%7B-%28x-%5Cmu%29%5E2%7D%7B2%5Csigma%5E2%7D%7D" alt="LaTeX-enabled image" />
<b>Пример.</b> Коробки с шоколадом упаковываются автоматически. Их средняя масса равна 1,06 кг. Известно, что 5%
коробок имеют массу, меньшую 1 кг. Каков процент коробок, масса которых превышает 940 г?

<b>Решение.</b> Пусть X - нормально распределенная случайная величина, равная массе коробки с конфетами, параметры
a = 1,06 (математическое ожидание), σ (среднее квадратичное отклонение). Используем формулу для нахождения
вероятности попадания нормальной случайной величины в интервал:
<img src="https://dxdt.ru/f?P%28%5Calpha%20%3C%20X%20%3C%20%5Cbeta%29%20%3D%20%5CPhi%28%5Cfrac%7B%5Cbeta-a%7D%7B%5Csigma%7D%29%20-%20%5CPhi%28%5Cfrac%7B%5Calpha-a%7D%7B%5Csigma%7D%29" alt="LaTeX-enabled image" />, где Ф(x) - функция Лапласа.
Используем условие: 5% коробок имеют массу, меньшую 1 кг, то есть:
<img src="https://dxdt.ru/f?P%28-%5Cinfty%20%3C%20X%20%3C%201%29%20%3D%20%5CPhi%28%5Cfrac%7B1-1%2C06%7D%7B%5Csigma%7D%29%20-%20%5CPhi%28%5Cfrac%7B-%5Cinfty-1%2C06%7D%7B%5Csigma%7D%29%20%3D%200%2C05" alt="LaTeX-enabled image" />
<img src="https://dxdt.ru/f?%5CPhi%28%5Cfrac%7B-0%2C06%7D%7B%5Csigma%7D%29%20-%20%5CPhi%28-%5Cinfty%29%20%3D%200%2C05" alt="LaTeX-enabled image" />         <img src="https://dxdt.ru/f?-%5CPhi%28%5Cfrac%7B-0%2C06%7D%7B%5Csigma%7D%29%20+%200%2C5%20%3D%200%2C05" alt="LaTeX-enabled image" />         <img src="https://dxdt.ru/f?%5CPhi%28%5Cfrac%7B-0%2C06%7D%7B%5Csigma%7D%29%20%3D%200%2C45" alt="LaTeX-enabled image" />

<img src="https://dxdt.ru/f?%5Csigma%20%3D%200%2C0365%0A" alt="LaTeX-enabled image" />

Теперь вычислим, каков процент коробок, масса которых превышает 940 г.
<img src="https://dxdt.ru/f?P%280%2C94%20%3C%20X%20%3C%20%5Cinfty%29%20%3D%20%5CPhi%28%5Cfrac%7B%5Cinfty-1%2C06%7D%7B0%2C0365%7D%29%20-%20%5CPhi%28%5Cfrac%7B0%2C94-1%2C06%7D%7B0%2C0365%7D%29%20%3D%20%5CPhi%28%5Cinfty%29%20-%20%5CPhi%28-%5Cfrac%7B0%2C12%7D%7B0%2C0365%7D%29%20%3D%20%0A" alt="LaTeX-enabled image" />
<img src="https://dxdt.ru/f?%3D%20%5CPhi%28%5Cinfty%29%20+%20%5CPhi%283%2C29%29%20%3D%200%2C5%20+%200%2C4995%20%3D%200%2C9995%0A" alt="LaTeX-enabled image" />

Ответ: Более 99,95% коробок.
</pre>`
}


