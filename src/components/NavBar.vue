<template>
  <header>
    <nav class="navbar navbar-light navbar-expand-lg">
      <div class="container">
        <ul class="navbar-nav">
          <RouterLink to="/" class="navbar-brand">Crypto Exchange</RouterLink>
          <li class="nav-item">
            <RouterLink to="/market" class="nav-link">Market</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/trade" class="nav-link">Trade</RouterLink>
          </li>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="wallet"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Wallet
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <RouterLink to="/overview-wallet" class="dropdown-item"
                  >Overview</RouterLink
                >
                <RouterLink to="/spot-wallet" class="dropdown-item"
                  >Spot</RouterLink
                >
                <RouterLink to="/funding-wallet" class="dropdown-item"
                  >Funding</RouterLink
                >
              </ul>
            </li>
          </ul>
        </ul>

        <div class="navbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/register" class="nav-link">Register</RouterLink>
            </li>
            <li class="nav-item align-middle">
              <RouterLink to="/login" class="nav-link">Log In</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
