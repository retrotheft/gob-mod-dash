<template>
  <div v-if="!postId"><PostThread thread="signup" :metadata="metadata" /></div>
  <div v-if="postId && !signups"><FetchSignups :postId="postId" /></div>
  <div v-if="signups"><CommitSignups :signups="signups" /></div>
</template>

<script>
import CommitSignups from "./CommitSignups"
import FetchSignups from "./FetchSignups";
import PostThread from "../shared/PostThread";

export default {
  name: "SignupIndex",
  components: {
    CommitSignups,
    FetchSignups,
    PostThread
  },
  props: {
    metadata: {
      type: Object,
      required: true,
    },
    postId: {
      type: String,
      required: false,
      default: null
    },
    signups: {
      type: Array,
      required: false,
      default: null
    }
  }
}
</script>