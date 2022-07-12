// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
function moveToInterest(){
    var element = document.getElementById("interest");
    element.scrollIntoView({behavior: "smooth"});

}

function moveToEducation(){
    var element = document.getElementById("education");
    element.scrollIntoView({behavior: "smooth"});
}

function moveToExperience(){
    var element = document.getElementById("experience");
    element.scrollIntoView({behavior: "smooth"});
}

function moveToAbout(){
    var element = document.getElementById("about");
    element.scrollIntoView({behavior: "smooth"});
}

/** Fetches tasks from the server and adds them to the DOM. */
function loadTasks() {
  fetch('/fetch-contacts').then(response => response.json()).then((tasks) => {
    const taskListElement = document.getElementById('contact-list');
    tasks.forEach((task) => {
      taskListElement.appendChild(createTaskElement(task));
    })
  });
}

/** Creates an element that represents a task, including its delete button. */
function createTaskElement(task) {
  const node = document.createElement("div");
  const contact = document.createElement('h2');
  contact.innerText="Name: "+task.name;
  const email = document.createElement('span');
  email.innerText = "Email: "+ task.email.substring(0,4)+"******";
  node.appendChild(contact);
  node.appendChild(email);
  return node;
}