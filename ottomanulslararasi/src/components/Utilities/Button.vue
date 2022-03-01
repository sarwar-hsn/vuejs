<template>
    <a href="#" class="primary-btn">Click Me</a>
</template>

<style scoped>
a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
  margin: 0 0 1rem 0;
}
a:hover {
  color: #0056b3;
  text-decoration: underline;
}
a:not([href]) {
  color: inherit;
  text-decoration: none;
}
a:not([href]):hover {
  color: inherit;
  text-decoration: none;
}
*,
::after,
::before {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

a {
  text-decoration: none;
  background-color: transparent;
}
a:-webkit-any-link {
  cursor: pointer;
}
a:hover,
a:focus {
  text-decoration: none;
  outline: none;
  color:#1ce7e7
}
.primary-btn {
  display: inline-block;
  font-size: 15px;
  font-family: "Play", sans-serif;
  font-weight: 700;
  padding: 14px 32px 12px;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  z-index: 1;
}
.primary-btn:hover:before {
  height: 100%;
  width: 100%;
}
.primary-btn:hover:after {
  height: 100%;
  width: 100%;
}
.primary-btn:before {
  position: absolute;
  left: 0;
  top: 0;
  height: 30px;
  width: 30px;
  border-left: 2px solid #00bfe7;
  border-top: 2px solid #00bfe7;
  content: "";
  z-index: -1;
  -webkit-transition: all, 0.7s;
  -o-transition: all, 0.7s;
  transition: all, 0.7s;
}
.primary-btn:after {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 30px;
  width: 30px;
  border-right: 2px solid #00bfe7;
  border-bottom: 2px solid #00bfe7;
  content: "";
  z-index: -1;
  -webkit-transition: all, 0.7s;
  -o-transition: all, 0.7s;
  transition: all, 0.7s;
}
</style>