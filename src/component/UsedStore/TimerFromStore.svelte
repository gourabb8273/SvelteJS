<script>
  import { time } from "../../stores/stores";
  const dateFormatter = new Intl.DateTimeFormat("en", {
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });
</script>

<div>
  <h3>Timer using store</h3>
  <h2>The time is {dateFormatter.format($time)}</h2>
</div>
