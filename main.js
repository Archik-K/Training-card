let tasksFront = [
	{
		name_block: "html",
		name_tasks: "task_1",
		isDone: true,
	},
	{
		name_block: "html",
		name_tasks: "task_2",
		isDone: false,
	},
	{
		name_block: "html",
		name_tasks: "task_3",
		isDone: false,
	},
	{
		name_block: "html",
		name_tasks: "task_4",
		isDone: false,
	},
	{
		name_block: "html",
		name_tasks: "task_5",
		isDone: false,
	},
	{
		name_block: "html",
		name_tasks: "task_5",
		isDone: false,
	},
	{
		name_block: "html",
		name_tasks: "task_5",
		isDone: false,
	},

	{
		name_block: "html",
		name_tasks: "task_5",
		isDone: false,
	},
	{
		name_block: "html",
		name_tasks: "task_5",
		isDone: false,
	},
	{
		name_block: "html",
		name_tasks: "task_5",
		isDone: false,
	},
	{
		name_block: "html",
		name_tasks: "task_5",
		isDone: false,
	},
	{
		name_block: "html",
		name_tasks: "task_5",
		isDone: false,
	},
];

let main_carta = document.querySelector(".main_carta");

const getCarta = (list) => {
	let box = '<div class="carta">';
	const count = Math.floor(list.length / 3) + 1;
	console.log(count);
	const all_count = list.length;
	let flag = false;
	let index = 0;

	for (let i = 0; i < count; i++) {
		let top, left;

		top = 100 * i;
		if (i % 2 === 0) {
			for (let j = 0; j < 3; j++) {
				index++;
				if (index > all_count) {
					flag = true;
					break;
				}
				left = 100 * j + 100 * (i % 2);
				console.log(left + " " + top + " " + index);
				box += `
                <button class='step' style='left: ${left}px; top: ${top}px;'  ${
					list[index - 1].isDone ? "disabled" : ""
				} id='${index}' onclick='handleClick(event)'>${index}</button>
                <div class="line" style='left: ${left + 50}px; top: ${
					top + 25
				}px;'></div>
                `;
				if (index == all_count) {
					if (index % 3 != 0)
						box += `<img src='/assets/images/finish.png' class='finish'  alt='finish' style='left: ${
							left + 100
						}px; top: ${top - 20}px;' >`;
					else
						box += `<img src='/assets/images/finish.png' class='finish'  alt='finish' style='left: ${
							left + 20
						}px; top: ${top + 100 - 20}px;'>`;
				}
			}
			if (!flag)
				box += `<div class="dugaRight" style='left: ${250}px; top: ${
					100 * i + 25
				}px;'></div>`;
		} else {
			for (let j = 2; j >= 0; j--) {
				index++;
				if (index > all_count) {
					flag = true;
					break;
				}

				left = 100 * j + 100 * (i % 2);
				console.log(left + " " + top + " " + index + " " + j);
				box += `
                <button class='step' style='left: ${left}px; top: ${top}px;'  ${
					list[index - 1].isDone ? "disabled" : ""
				} id='${index}' onclick='handleClick(event)'>${index}</button>
                <div class="line" style='left: ${left - 50}px; top: ${
					top + 25
				}px;'></div>
                 `;
				if (index == all_count) {
					if (index % 3 != 0)
						box += `<img src='./assets/images/finish.png' class='finish'  alt='finish' style='left: ${
							left - 135
						}px; top: ${top - 20}px;'>`;
					else
						box += `<img src='./assets/images/finish.png' class='finish'  alt='finish' style='left: ${
							left - 60
						}px; top: ${top + 100 - 20}px;'>`;
				} else {
					console.log("ddd");
				}
			}
			if (!flag)
				box += `<div class="dugaLeft" style='left: ${0}px; top: ${
					100 * i + 25
				}px;'></div>`;
		}
	}

	box += "</div>";
	return box;
};
main_carta.innerHTML = getCarta(tasksFront);

const handleClick = (e) => {
	let i = parseInt(e.target.id);
	// console.log(i)
	// console.log(`Кнопка ${i} была нажата!`);
	openModalBtn();
	tasksFront[i - 1].isDone = true;
	console.log(tasksFront);

	main_carta.innerHTML = getCarta(tasksFront);
	isFinish();
};
const happy = document.querySelector(".happy");
const isFinish = () => {
	let k = 0;
	tasksFront.map((item) => {
		if (item.isDone) k++;
	});
	if (k == tasksFront.length) {
		let n = Math.floor(tasksFront.length / 3);
		happy.innerHTML += `<h2 class='happy' style='left: ${0}%; top: 0px;'>Вы - молодец!</h2>`;
	}
};

/// Arina modal window

const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");

const openModalBtn = () => {
	modal.style.display = "block";
};

closeModalBtn.addEventListener("click", () => {
	modal.style.display = "none";
	console.log("dddd");
});
