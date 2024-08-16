// Создаю массив для добавления и работы с фильмами
let Films = [];

//Объявляю остальные DOM элементы 

const AddInputFilm = document.getElementById("AddInput-JS")
const AddButtonFilm = document.getElementById("AddButton-JS")
const RemoveButtonFilm = document.getElementById("RemoveButton-JS")
const ListFilms = document.getElementById("list__films-JS")



// Создаю стрелочную функцию, которая возвращает название фильма из инпута
let GetFilmNameFromUser = () => {
    let FilmName = AddInputFilm.value.trim();
    return FilmName
}

let AddFilmInList = () => {
    let FilmName = GetFilmNameFromUser();
    if (!FilmName) {
        return
    }
    Films.push(FilmName);

    let FilmItem = document.createElement('li');
    FilmItem.className = "list__item__films";

    const FilmItemInput = document.createElement('input')
    FilmItemInput.id = `CheckFilm-${Films.length}`; // уникальный ID для каждого чекбокса
    FilmItemInput.type = "checkbox"
    FilmItemInput.className = "CheckFilm"


    const FilmItemLabel = document.createElement('label')
    FilmItemLabel.className = "checkbox-label";
    FilmItemLabel.setAttribute('for', FilmItemInput.id); // связывание label с checkbox
    FilmItemLabel.textContent = FilmName;
   

    const RemoveBtnInList = document.createElement('button')
    RemoveBtnInList.className = "RemoveButton"

    RemoveBtnInList.addEventListener('click', () => {
        ListFilms.removeChild(FilmItem);
    });


    FilmItem.append(FilmItemInput, FilmItemLabel, RemoveBtnInList);

    ListFilms.appendChild(FilmItem);

    FilmItemInput.addEventListener('change', function() {
        if (this.checked) {
            FilmItem.style.backgroundColor = '#2B2A2A'; // Пример изменения стиля при отметке чекбокса
        } else {
            FilmItem.style.backgroundColor = ''; // Возвращаем исходный стиль при снятии отметки
        }
    });

    AddInputFilm.value = '';

    console.log(FilmName)
}




AddButtonFilm.addEventListener("click",AddFilmInList);