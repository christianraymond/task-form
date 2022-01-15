<template>
  <div class="flex-container">
    <div class="row top-header">
      <h2 class="block">Edit task</h2>
      <div class="icons">
        <i class="pi pi-check block-circle"></i>
        <i class="pi pi-ellipsis-h block"></i>
      </div>
    </div>
    <p class="some-header">J0001234 - August Social Media Retainer</p>
    <div v-for="task in taskStatus" :key="task" class="pill">
      <span id="tasks" @click="deleteTask(task)">{{ task }}</span>
    </div>
    <div class="menu-items">
      <div class="menu-container menu-container overflow-hidden">
        <div class="flex menu-list">
          <i
            class="pi pi-check text-blue-500"
            style="padding: inherit; font-size: 13px"
          >
            Task</i
          >
          <i
            class="pi pi-folder-open px-3 py-0"
            style="padding: inherit; font-size: 13px"
          >
            Brief</i
          >
          <i
            class="pi pi-folder px-3 py-0"
            style="padding: inherit; font-size: 13px"
          >
            Notes</i
          >
          <i
            class="pi pi-clock px-3 py-0"
            style="padding: inherit; font-size: 13px"
          >
            Time</i
          >
        </div>
      </div>
    </div>
    <form @submit.prevent="handleSubmit" class="form-container">
      <label>Task label</label>
      <div class="form-inline">
        <input type="text" v-model="taskLabel" />
        <label class="toggle">
          <input class="toggle-checkbox" type="checkbox" checked />
          <div class="toggle-switch"></div>
          <span class="toggle-label">Billable</span>
        </label>
      </div>

      <div class="form-inline">
        <label
          >Task Type <br /><br />
          <select v-model="taskType">
            <option value="Design">Design</option>
            <option value="developer">Developer</option>
            <option value="scrum-master">Scrum Master</option>
          </select>
        </label>
        <label
          >Estimate Time <br /><br />
          <input type="date" v-model="estimateDate" placeholder="16:00" />
        </label>
      </div>

      <div class="form-inline">
        <label
          >Start Date <br /><br />
          <input type="date" v-model="startDate" placeholder="14 July 2021" />
          <p-calendar id="icon" v-model="date3" :show-icon="true"></p-calendar>
        </label>
        <label
          >Due Date <br /><br />
          <input type="date" v-model="dueDate" placeholder="Select date" />
        </label>
      </div>

      <div class="flex-content">
        <div><label>Description </label></div>
        <div id="extend-date">
          <input type="checkbox" v-model="jobDue" />
          <label>Extend Job Due Date</label>
        </div>
      </div>
      <textarea
        type="text"
        v-model="dueDate"
        id="description"
        placeholder="This is a short unfortunatted, editable description loaded from the task listed under agency tasks. This is a short unformatted, editable default description loaded from the task listed under agency tasks"
      /><br /><br />
      <div class="form-inline">
        <label
          >Reviewed by <br /><br />
          <select v-model="reviewedBy">
            <option>No review</option>
            <option value="developer">Shaun</option>
            <option value="scrum-master">De wet</option>
          </select>
        </label>
        <label
          >Allocate to CE <br /><br />
          <select v-model="allocateCost">
            <option>Select Cost Estimate</option>
            <option value="estimate-one">Estiamte 1</option>
            <option value="estimate-two">Estiamte 2</option>
          </select>
        </label>
      </div>

      <div class="task-bottom">
        <p>To assign a task to someone, first allocate it to a Cost Estimate</p>
      </div>

      <!-- <label>Task Status (eg: html,)</label>
      <input type="text" v-model="tempTask" @keyup="addTask" /> -->

      <div class="p-field p-col-12 p-md-4">
        <label for="icon">Icon</label>
        <p-calendar id="icon" v-model="date3" :show-icon="true"></p-calendar>
      </div>

      <div class="btnWrapper">
        <div class="submit-btn user-btn">
          <button>Save task</button>
        </div>
        <div class="cancel-btn user-btn">
          <button>Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskLabel: "Stationary Design",
      estimateTime: "",
      startDate: "",
      taskType: "Design",
      reviewedBy: "No review",
      allocateCost: "Select Cost Estimate",
      jobDue: false,
      tempSkill: "",
      taskStatus: ["With Client", "Urgent", "On Hold", "Pending", "In Review"],
    };
  },
  methods: {
    addTask(e) {
      if (e.key === "," && this.tempTask) {
        if (!this.taskStatus.includes(this.tempTask)) {
          this.taskStatus.push(this.tempTask);
        }
        this.tempTask = "";
      }
    },
    deleteTask(task) {
      this.taskStatus = this.taskStatus.filter((item) => {
        return task != item;
      });
    },
    handleSubmit() {
      console.log("Form submitted!");
    },
  },
};
</script>
