<template>
  <div>
    <div id="wrapper">
      <!-- Sidebar -->
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <!-- Sidebar - Brand -->
        <NuxtLink
          class="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">
            <img width="100%" src="../assets/img/logo.png" alt="" />
          </div>
        </NuxtLink>

        <!-- Divider -->
        <!--<hr class="sidebar-divider my-0" />-->

        <!-- Nav Item - Dashboard -->
        <li class="nav-item">
          <NuxtLink to="/" class="nav-link d-flex justify-content-between">
            <span>Dashboard</span>
            <i class="bi bi-house-door-fill text-white"></i>
          </NuxtLink>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider" />

        <!-- Heading -->
        <div class="sidebar-heading">aluno</div>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item active">
          <a
            class="nav-link d-flex justify-content-between"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="false"
            aria-controls="collapsePages"
          >
            <span>Áudio</span>
            <i class="bi bi-headphones"></i>
          </a>
          <div
            id="collapsePages"
            class="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <NuxtLink class="collapse-item" to="/audio/send-for-teacher">
                Enviar para o professor
              </NuxtLink>
              <NuxtLink class="collapse-item" to="/audio/my-audios">
                Meus áudios
              </NuxtLink>
            </div>
          </div>
        </li>

        <li class="nav-item active">
          <a
            class="nav-link d-flex justify-content-between"
            href="#"
            data-toggle="collapse"
            data-target="#collapseFinanceiro"
            aria-expanded="false"
            aria-controls="collapseFinanceiro"
          >
            <span>Financeiro</span>
            <i class="bi bi-currency-dollar"></i>
          </a>
          <div
            id="collapseFinanceiro"
            class="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <!--<h6 class="collapse-header">Envios de áudio</h6>-->
              <NuxtLink class="collapse-item" to="/financial/proof_payment">
                Enviar comprovante
              </NuxtLink>

              <NuxtLink class="collapse-item" to="/financial/my-vouchers">
                Meus comprovantes
              </NuxtLink>
            </div>
          </div>
        </li>

        <li class="nav-item active">
          <a
            class="nav-link d-flex justify-content-between"
            href="#"
            data-toggle="collapse"
            data-target="#collapse-links"
            aria-expanded="false"
            aria-controls="collapse-links"
          >
            <span>Links</span>
            <i class="bi bi-link-45deg"></i>
          </a>
          <div
            id="collapse-links"
            class="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <NuxtLink class="collapse-item" to="/links/class-links">
                Links das aulas
              </NuxtLink>
              <NuxtLink class="collapse-item" to="/links/my-links">
                Meus links
              </NuxtLink>
            </div>
          </div>
        </li>

        <li class="nav-item active">
          <NuxtLink
            class="nav-link d-flex justify-content-between"
            to="/support"
          >
            <span>Suporte</span>
            <i class="bi bi-chat-dots"></i>
          </NuxtLink>
        </li>

        <li class="nav-item active">
          <a
            class="nav-link d-flex justify-content-between"
            href="#"
            data-toggle="collapse"
            data-target="#collapseConfig"
            aria-expanded="false"
            aria-controls="collapseConfig"
          >
            <span>Configurações</span>
            <i class="bi bi-gear"></i>
          </a>
          <div
            id="collapseConfig"
            class="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <!--<h6 class="collapse-header">Envios de áudio</h6>-->
              <NuxtLink class="collapse-item" to="/settings/change-password">
                Alterar senha
              </NuxtLink>

              <!--<NuxtLink class="collapse-item" to="/audio/my-audios">
                Meus áudios
              </NuxtLink>-->
            </div>
          </div>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block" />

        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
          <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
      </ul>
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <!-- Topbar -->
          <nav
            class="
              navbar navbar-expand navbar-light
              bg-white
              topbar
              mb-4
              static-top
              shadow
            "
          >
            <!-- Sidebar Toggle (Topbar) -->
            <button
              id="sidebarToggleTop"
              class="btn btn-link d-md-none rounded-circle mr-3"
            >
              <i class="fa fa-bars"></i>
            </button>

            <!-- Topbar Search -->
            <form
              class="
                d-none d-sm-inline-block
                form-inline
                mr-auto
                ml-md-3
                my-2 my-md-0
                mw-100
                navbar-search
              "
            >
              <div class="input-group">
                <!--<input
                  type="text"
                  class="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />-->
                <!--<div class="input-group-append">
                  <button class="btn btn-primary" type="button">
                    <i class="fas fa-search fa-sm"></i>
                  </button>
                </div>-->
              </div>
            </form>

            <!-- Topbar Navbar -->
            <ul class="navbar-nav ml-auto">
              <!-- Nav Item - Search Dropdown (Visible Only XS) -->
              <li class="nav-item dropdown no-arrow d-sm-none">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="searchDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-search fa-fw"></i>
                </a>
                <!-- Dropdown - Messages -->
                <div
                  class="
                    dropdown-menu dropdown-menu-right
                    p-3
                    shadow
                    animated--grow-in
                  "
                  aria-labelledby="searchDropdown"
                >
                  <form class="form-inline mr-auto w-100 navbar-search">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                      <div class="input-group-append">
                        <button class="btn btn-primary" type="button">
                          <i class="fas fa-search fa-sm"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>

              <!-- Nav Item - Alerts -->
              <li class="nav-item dropdown no-arrow mx-1">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="alertsDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="bi bi-bell-fill"></i>
                  <!-- Counter - Alerts -->
                  <span class="badge badge-danger badge-counter">3+</span>
                </a>
                <!-- Dropdown - Alerts -->
                <div
                  class="
                    dropdown-list dropdown-menu dropdown-menu-right
                    shadow
                    animated--grow-in
                  "
                  aria-labelledby="alertsDropdown"
                >
                  <h6 class="dropdown-header">Notificações</h6>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle bg-primary">
                        <i class="fas fa-file-alt text-white"></i>
                      </div>
                    </div>
                    <div>
                      <!--<div class="small text-gray-500">December 12, 2019</div>
                      <span class="font-weight-bold">
                        A new monthly report is ready to download!
                      </span>-->
                      Sem notificações
                    </div>
                  </a>
                  <a
                    class="dropdown-item text-center small text-gray-500"
                    href="#"
                    >Show All Alerts</a
                  >
                </div>
              </li>

              <!-- Nav Item - Messages -->
              <li class="nav-item dropdown no-arrow mx-1">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="messagesDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="bi bi-chat-fill"></i>
                  <!-- Counter - Messages -->
                  <span class="badge badge-danger badge-counter">7</span>
                </a>
                <!-- Dropdown - Messages -->
                <div
                  class="
                    dropdown-list dropdown-menu dropdown-menu-right
                    shadow
                    animated--grow-in
                  "
                  aria-labelledby="messagesDropdown"
                >
                  <h6 class="dropdown-header">Mensagens</h6>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="dropdown-list-image mr-3">
                      <img
                        class="rounded-circle"
                        src="img/undraw_profile_1.svg"
                        alt="..."
                      />
                      <div class="status-indicator bg-success"></div>
                    </div>
                    <div class="font-weight-bold">
                      <!--<div class="text-truncate">
                        Hi there! I am wondering if you can help me with a
                        problem I've been having.
                      </div>
                      <div class="small text-gray-500">Emily Fowler · 58m</div>-->
                      Nehuma mensagem
                    </div>
                  </a>
                  <a
                    class="dropdown-item text-center small text-gray-500"
                    href="#"
                    >Read More Messages</a
                  >
                </div>
              </li>

              <div class="topbar-divider d-none d-sm-block"></div>

              <!-- Nav Item - User Information -->
              <li class="nav-item dropdown no-arrow">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{
                    $auth.user.name
                  }}</span>
                  <img
                    class="img-profile rounded-circle"
                    src="img/undraw_profile.svg"
                  />
                </a>
                <!-- Dropdown - User Information -->
                <div
                  class="
                    dropdown-menu dropdown-menu-right
                    shadow
                    animated--grow-in
                  "
                  aria-labelledby="userDropdown"
                >
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Profile
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                    Settings
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                    Activity Log
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#" @click="logout">
                    <i
                      class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
                    ></i>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <!-- End of Topbar -->

          <!-- Begin Page Content -->
          <div class="container-fluid">
            <!-- 404 Error Text -->
            <Nuxt />
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <footer class="sticky-footer bg-white">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright &copy; Your Website 2020</span>
            </div>
          </div>
        </footer>
        <!-- End of Footer -->
      </div>
      <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    logout: async function () {
      await this.$auth.logout(/* .... */);
      window.location.href = "/auth/login";
    },
  },
};
</script>