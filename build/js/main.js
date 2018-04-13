(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var Task = /** @class */ (function () {
    function Task(taskname) {
        this.id = new Date().getTime().toString();
        this.name = taskname;
        this.status = false;
    }
    return Task;
}());
var TaskManager = /** @class */ (function () {
    function TaskManager(array) {
        this.tasks = array;
    }
    TaskManager.prototype.add = function (task) {
        this.tasks.push(task);
        console.log(this.tasks);
    };
    return TaskManager;
}());
var ListView = /** @class */ (function () {
    function ListView(listid) {
        this.list = document.getElementById(listid);
    }
    ListView.prototype.render = function (items) {
        var _this = this;
        items.forEach(function (task) {
            var id = task.id;
            var name = task.name;
            var status = task.status;
            var template = "<li id=\"" + id + "\" data-status=\"" + status + "\">\n                                    <div class=\"task-container\">\n                                        <div class=\"task-name\">" + name + "</div>\n                                        <div class=\"task-buttons\">\n                                            <button type=\"button\" data-funtion=\"status\">&#x2714;</button>\n                                            <button type=\"button\" data-function=\"delete\" id=\"deleteButton\">&times;</button>\n                                        </div>\n                                    </div>\n                                </li>";
            var fragment = document.createRange().createContextualFragment(template);
            _this.list.appendChild(fragment);
        });
    };
    ListView.prototype.clear = function () {
        //clears your list before the new one gets added
        this.list.innerHTML = '';
    };
    return ListView;
}());
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.storage = window.localStorage;
    }
    DataStorage.prototype.store = function (array) {
        var data = JSON.stringify(array);
        this.storage.setItem('taskdata', data);
    };
    DataStorage.prototype.read = function () {
        //everything that we store locally is stored as string
        var data = this.storage.getItem('taskdata');
        var array = JSON.parse(data);
        return array;
    };
    return DataStorage;
}());
//initialize
var taskarray = [];
var taskmanager = new TaskManager(taskarray);
var listview = new ListView('task-list');
var taskstorage = new DataStorage();
window.addEventListener('load', function () {
    var taskdata = taskstorage.read();
    taskdata.forEach(function (item) {
        taskarray.push(item);
    });
    listview.render(taskarray);
    //taskarray = taskdata;
    //console.log(taskdata);
});
//reference to form
var taskform = document.getElementById('task-form');
taskform.addEventListener('submit', function (event) {
    //form doesnt get submitted so page doesnt get refresh and losing the value for our input
    event.preventDefault();
    //get the value 
    var input = document.getElementById('task-input');
    var taskname = input.value;
    taskform.reset();
    //testing
    //console.log(taskName);
    var task = new Task(taskname);
    taskmanager.add(task);
    listview.clear();
    taskstorage.store(taskarray);
    listview.render(taskarray);
});
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0cy9tYWluLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0lBSUksY0FBYSxRQUFnQjtRQUN6QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQUVEO0lBRUkscUJBQVksS0FBa0I7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELHlCQUFHLEdBQUgsVUFBSSxJQUFVO1FBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFFRDtJQUdJLGtCQUFZLE1BQWE7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRWhELENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQVEsS0FBaUI7UUFBekIsaUJBa0JDO1FBakJHLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ1gsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNqQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3JCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDekMsSUFBSSxRQUFRLEdBQUcsY0FBVyxFQUFFLHlCQUFrQixNQUFNLGtKQUVhLElBQUksc2NBTS9CLENBQUM7WUFDdkIsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pFLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXBDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFDSSxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FoQ0EsQUFnQ0MsSUFBQTtBQUVEO0lBRUk7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDdkMsQ0FBQztJQUNELDJCQUFLLEdBQUwsVUFBTSxLQUFpQjtRQUNuQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsMEJBQUksR0FBSjtRQUNJLHNEQUFzRDtRQUN0RCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDTCxrQkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBRUQsWUFBWTtBQUNaLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUNuQixJQUFJLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBRSxTQUFTLENBQUMsQ0FBQztBQUM5QyxJQUFJLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN6QyxJQUFJLFdBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0FBRWhDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7SUFDNUIsSUFBSSxRQUFRLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1FBQ2xCLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRTNCLHVCQUF1QjtJQUN2Qix3QkFBd0I7QUFFeEIsQ0FBQyxDQUFDLENBQUM7QUFHWCxtQkFBbUI7QUFDbkIsSUFBTSxRQUFRLEdBQXNCLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFFLENBQUM7QUFDMUUsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLEtBQVk7SUFFN0MseUZBQXlGO0lBQ3pGLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUV2QixnQkFBZ0I7SUFDaEIsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRCxJQUFJLFFBQVEsR0FBc0IsS0FBTSxDQUFDLEtBQUssQ0FBQztJQUUvQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFakIsU0FBUztJQUNULHdCQUF3QjtJQUV4QixJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdCLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFL0IsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjbGFzcyBUYXNre1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHN0YXR1czogYm9vbGVhbjsgXHJcbiAgICBjb25zdHJ1Y3RvciAodGFza25hbWU6IHN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdGFza25hbWU7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgVGFza01hbmFnZXIge1xyXG4gICAgdGFza3MgOiBBcnJheTxUYXNrPjtcclxuICAgIGNvbnN0cnVjdG9yKGFycmF5OiBBcnJheTxUYXNrPil7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IGFycmF5O1xyXG4gICAgfVxyXG4gICAgYWRkKHRhc2s6IFRhc2spe1xyXG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhc2tzKTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5jbGFzcyBMaXN0VmlldyB7XHJcbiAgICBsaXN0OkhUTUxFbGVtZW50O1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihsaXN0aWQ6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLmxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsaXN0aWQpO1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyIChpdGVtczpBcnJheTxUYXNrPil7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlkID0gdGFzay5pZDtcclxuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gdGFzay5uYW1lO1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXR1cyA9IHRhc2suc3RhdHVzO1xyXG5sZXQgdGVtcGxhdGUgPSBgPGxpIGlkPVwiJHtpZH1cIiBkYXRhLXN0YXR1cz1cIiR7c3RhdHVzfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLW5hbWVcIj4ke25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1mdW50aW9uPVwic3RhdHVzXCI+JiN4MjcxNDs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLWZ1bmN0aW9uPVwiZGVsZXRlXCIgaWQ9XCJkZWxldGVCdXR0b25cIj4mdGltZXM7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5gO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQodGVtcGxhdGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjbGVhcigpe1xyXG4gICAgICAgIC8vY2xlYXJzIHlvdXIgbGlzdCBiZWZvcmUgdGhlIG5ldyBvbmUgZ2V0cyBhZGRlZFxyXG4gICAgICAgIHRoaXMubGlzdC5pbm5lckhUTUw9Jyc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIERhdGFTdG9yYWdlIHtcclxuICAgIHN0b3JhZ2U6YW55O1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG4gICAgfVxyXG4gICAgc3RvcmUoYXJyYXk6QXJyYXk8VGFzaz4pe1xyXG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoYXJyYXkpO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXRJdGVtKCd0YXNrZGF0YScsZGF0YSk7XHJcbiAgICB9XHJcbiAgICByZWFkKCl7XHJcbiAgICAgICAgLy9ldmVyeXRoaW5nIHRoYXQgd2Ugc3RvcmUgbG9jYWxseSBpcyBzdG9yZWQgYXMgc3RyaW5nXHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnN0b3JhZ2UuZ2V0SXRlbSgndGFza2RhdGEnKTtcclxuICAgICAgICBsZXQgYXJyYXkgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxufVxyXG5cclxuLy9pbml0aWFsaXplXHJcbnZhciB0YXNrYXJyYXkgPSBbXTtcclxudmFyIHRhc2ttYW5hZ2VyID0gbmV3IFRhc2tNYW5hZ2VyICh0YXNrYXJyYXkpO1xyXG52YXIgbGlzdHZpZXcgPSBuZXcgTGlzdFZpZXcoJ3Rhc2stbGlzdCcpO1xyXG52YXIgdGFza3N0b3JhZ2UgPSBuZXcgRGF0YVN0b3JhZ2UoKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+e1xyXG4gICAgICAgIGxldCB0YXNrZGF0YSA9IHRhc2tzdG9yYWdlLnJlYWQoKTtcclxuICAgICAgICB0YXNrZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRhc2thcnJheS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxpc3R2aWV3LnJlbmRlcih0YXNrYXJyYXkpO1xyXG5cclxuICAgICAgICAvL3Rhc2thcnJheSA9IHRhc2tkYXRhO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGFza2RhdGEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcblxyXG4vL3JlZmVyZW5jZSB0byBmb3JtXHJcbmNvbnN0IHRhc2tmb3JtID0gKDxIVE1MRm9ybUVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWZvcm0nKSk7XHJcbnRhc2tmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudDogRXZlbnQpID0+IHsgXHJcblxyXG4gICAgLy9mb3JtIGRvZXNudCBnZXQgc3VibWl0dGVkIHNvIHBhZ2UgZG9lc250IGdldCByZWZyZXNoIGFuZCBsb3NpbmcgdGhlIHZhbHVlIGZvciBvdXIgaW5wdXRcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgIC8vZ2V0IHRoZSB2YWx1ZSBcclxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWlucHV0Jyk7XHJcbiAgICBsZXQgdGFza25hbWUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+aW5wdXQpLnZhbHVlO1xyXG4gICAgXHJcbiAgICB0YXNrZm9ybS5yZXNldCgpO1xyXG4gICAgXHJcbiAgICAvL3Rlc3RpbmdcclxuICAgIC8vY29uc29sZS5sb2codGFza05hbWUpO1xyXG4gICAgXHJcbiAgICBsZXQgdGFzayA9IG5ldyBUYXNrKHRhc2tuYW1lKTtcclxuICAgIHRhc2ttYW5hZ2VyLmFkZCh0YXNrKTtcclxuICAgIGxpc3R2aWV3LmNsZWFyKCk7XHJcbiAgICB0YXNrc3RvcmFnZS5zdG9yZSh0YXNrYXJyYXkpO1xyXG4gICAgbGlzdHZpZXcucmVuZGVyKHRhc2thcnJheSk7XHJcbiAgICBcclxufSk7Il19
