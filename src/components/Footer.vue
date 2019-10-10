<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        Made by
        <strong>Jade Ryan</strong>
      </p>
    </div>
    <div class="content has-text-centered">
      <a
        href="https://www.twitter.com/itsjaderyan"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to my Twitter account"
      >
        <font-awesome-icon :icon="['fab', 'twitter']" class="icon is-small" />
      </a>
      <a
        href="https://www.github.com/jaderyan"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to my Github account"
      >
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a
        href="https://www.linkedin.com/in/jade-ryan"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to my LinkedIn account"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer"
};
</script>

<style scoped lang="scss">
a {
  margin: space(8);
}
</style>
