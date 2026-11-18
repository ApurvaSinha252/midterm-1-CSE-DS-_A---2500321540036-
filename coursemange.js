let courses = [
    { id: 1, name: "OS", code: "25CS301", department: "CSE" },
    { id: 2, name: "ADS", code: "CS302", department: "CSE" },
    { id: 3, name: "OOPP", code: "CS303", department: "CSE" }
];

function displayCourses() {

    let data = "";

    courses.forEach(c => {
        data += `
        <tr>
            <td>${c.id}</td>
            <td>${c.name}</td>
            <td>${c.code}</td>
            <td>${c.department}</td>
            <td>
                <button class="edit"
                onclick="editCourse(${c.id})">Edit</button>

                <button class="delete"
                onclick="deleteCourse(${c.id})">Delete</button>
            </td>
        </tr>`;
    });

    document.getElementById("list").innerHTML = data;

    localStorage.setItem("courses", JSON.stringify(courses));
}

function saveCourse() {

    let id = Number(document.getElementById("id").value);

    let name = document.getElementById("name").value;
    let code = document.getElementById("code").value;
    let dept = document.getElementById("dept").value;

    if (!id || !name || !code || !dept) {
        alert("Please fill all fields");
        return;
    }

    let existing = courses.find(c => c.id === id);

    if (existing) {
        existing.name = name;
        existing.code = code;
        existing.department = dept;

        alert("Course Updated Successfully");
    } else {
        courses.push({
            id: id,
            name: name,
            code: code,
            department: dept
        });

        alert("Course Added Successfully");
    }

    clearForm();
    displayCourses();
}

function editCourse(id) {

    let c = courses.find(x => x.id === id);

    document.getElementById("id").value = c.id;
    document.getElementById("name").value = c.name;
    document.getElementById("code").value = c.code;
    document.getElementById("dept").value = c.department;
}

function deleteCourse(id) {

    if (confirm("Are you sure you want to delete this course?")) {

        courses = courses.filter(c => c.id !== id);

        displayCourses();

        alert("Course Deleted Successfully");
    }
}

function clearForm() {

    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("code").value = "";
    document.getElementById("dept").value = "";
}


displayCourses();
