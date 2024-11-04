const employees = [
  {
    id: 1,
    firstname: "Rahul",
    email: "rahulemp123@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: true,
        taskTitle: "Design homepage",
        taskDescription: "Create the main homepage design layout.",
        taskDate: "2024-10-18",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update footer",
        taskDescription: "Add additional links in the footer.",
        taskDate: "2024-10-10",
        category: "Development"
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
      accepted: 1
    }
  },
  {
    id: 2,
    firstname: "Anitosh",
    email: "anitoshemp124@gmail.com",
    password: "123",
    tasks: [
      {
        active: true, 
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix CSS issues",
        taskDescription: "Resolve responsive design issues.",
        taskDate: "2024-10-18",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Integrate API",
        taskDescription: "Connect to the external payment gateway API.",
        taskDate: "2024-10-15",
        category: "Backend"
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1,
      accepted: 3
    }
  },
  {
    id: 3,
    firstname: "Ankan",
    email: "ankanemp125@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test user login",
        taskDescription: "Ensure the login form works correctly.",
        taskDate: "2024-10-18",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Refactor header",
        taskDescription: "Simplify header component for better performance.",
        taskDate: "2024-10-12",
        category: "Development"
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
      accepted: 1
    }
  },
  {
    id: 4,
    firstname: "Amit",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Deploy to production",
        taskDescription: "Move the project to the production environment.",
        taskDate: "2024-10-19",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write unit tests",
        taskDescription: "Create unit tests for the authentication module.",
        taskDate: "2024-10-10",
        category: "Testing"
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
      accepted: 2
    }
  },
  {
    id: 5,
    firstname: "Sohan",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Optimize images",
        taskDescription: "Reduce the size of images for faster load times.",
        taskDate: "2024-10-18",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update SEO metadata",
        taskDescription: "Add metadata for SEO optimization.",
        taskDate: "2024-10-08",
        category: "Marketing"
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
      accepted: 5,
    }
  }
];


// console.log(employees)

// Admin JSON data
const admin = {
  id: 1,
  firstname: "Joni",
  email: "joniadmin123@gmail.com",
  password: "123",

}

export const setLocalstorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin))

}

export const getLocalstorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  console.log(employees, admin)
  // console.log(empdata)
  // console.log(admindata)
  return { employees, admin }
}