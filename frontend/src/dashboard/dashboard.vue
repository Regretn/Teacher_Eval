<script>
import "remixicon/fonts/remixicon.css";
import "../style/dash.css";
export default {
  data() {
    return { isnavbar: true };
  },
  methods: {},
  components: {},
};
</script>
<template>
  <div>
    <!-- SIDEBAR -->
    <section id="sidebar" :class="{ hide: isnavbar }">
      <a href="#" class="brand">
        <img src="../assets/test.png" />
      </a>
      <ul class="side-menu top" @click="test()">
        <li class="active">
          <a href="#">
            <i class="ri-dashboard-line"></i>
            <span class="text">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="ri-quill-pen-line"></i>
            <span class="text">Evaluation</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="ri-message-2-fill"></i>
            <span class="text">Forum</span>
          </a>
        </li>
      </ul>
      <ul class="side-menu">
        <li>
          <a href="#" class="logout">
            <i class="bx bxs-log-out"></i>
            <span class="text">Logout</span>
          </a>
        </li>
      </ul>
    </section>
    <!-- SIDEBAR -->

    <!-- CONTENT -->
    <section id="content">
      <!-- NAVBAR -->
      <nav>
        <i class="ri-menu-line" @click="this.isnavbar = !this.isnavbar"></i>
        <a href="#" class="nav-link">Insert time here</a>
        <form action="#">
          <div class="form-input">
            <input type="search" placeholder="Search..." />
            <button type="submit" class="search-btn">
              <i class="bx bx-search"></i>
            </button>
            <form action="#"></form>
          </div>
        </form>
        <input type="checkbox" id="switch-mode" hidden />
        <label for="switch-mode" class="switch-mode"></label>
        <a href="" class="profile">
          <img src="../assets/luffy.jpg" />
        </a>
      </nav>
      <!-- NAVBAR -->

      <!-- MAIN -->
      <main>
        <div class="head-title">
          <div class="left">
            <h1>Dashboard</h1>
            <ul class="breadcrumb">
              <li>
                <a href="#">Dashboard</a>
              </li>
            </ul>
          </div>
        </div>

        <ul class="box-info">
          <li>
            <i class="bx bxs-group"></i>
            <span class="text">
              <h3>1020</h3>
              <p>Total Student enrolled</p>
            </span>
          </li>
          <li>
            <i class="bx bxs-edit"></i>
            <span class="text">
              <h3>1823</h3>
              <p>Total Teacher Evaluation</p>
            </span>
          </li>
          <li>
            <i class="bx bx-timer"></i>
            <span class="text">
              <h3>182</h3>
              <p>Evaluation Pending</p>
            </span>
          </li>
        </ul>

        <div class="table-data">
          <div class="order">
            <div class="head">
              <h3>Rank Teacher insert here</h3>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Professor</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="../assets/luffy.jpg" />
                    <p>Insert name here</p>
                  </td>
                  <td><span class="status completed">Rank 1</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="../assets/luffy.jpg" />
                    <p>Insert name here</p>
                  </td>

                  <td><span class="status process">Rank 2</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="../assets/luffy.jpg" />
                    <p>Insert name here</p>
                  </td>
                  <td><span class="status pending">Rank 3</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="todo">
            <div class="head">
              <h3>Chart graph here</h3>
            </div>
            <ul class="todo-list"></ul>
          </div>
        </div>
      </main>
      <!-- MAIN -->
    </section>
    <!-- CONTENT -->
  </div>
</template>
