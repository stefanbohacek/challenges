---
layout: layout-main.njk
title: Home
eleventyNavigation:
  key: Home
  order: 1
---

<div class="p-5 mb-5 bg-body-tertiary rounded-bottom-3">
  <div class="container-fluid">
    <h1 class="display-5 fw-bold">{{ site.title }}</h1>
    <p class="col-md-8 fs-5">
      <a href="/about/">Learn more about this project</a> or browse challenges below. 
    </p>
    <form class="fsb-prompt">
      <label>Share this page from your fediverse server</label>
      <div class="fsb-input-group mb-3">
        <span class="fsb-input-group-text">https://</span>
        <input required
          type="text"
          name="fediverse-domain"
          placeholder="mastodon.social"
          class="fsb-input fsb-domain"
          aria-label="Server domain">
        <button class="fsb-button"
          type="submit"><img src="https://fediverse-share-button.stefanbohacek.dev/fediverse-share-button/icons/mastodon.svg"
            class="fsb-icon"></span>Share</button>
      </div>
      <p class="fsb-support-note fsb-d-none">This server does not support sharing. Please visit <a
          class="fsb-support-note-link"
          target="_blank"
          href=""></a>.</p>
    </form>
    <link rel="stylesheet" href="https://fediverse-share-button.stefanbohacek.dev/fediverse-share-button/styles.min.css">
    <script src="https://fediverse-share-button.stefanbohacek.dev/fediverse-share-button/script.min.js" defer class="fsb-script"></script>
  </div>
</div>

<ul>
  <li>
    <a href="#monthly-events">Monthly events</a>
  </li>
  <li>
    <a href="#weekly-events">Weekly events</a>
  </li>
</ul>

<div>
  <h2 id="monthly-events" class="mt-5 sticky-top bg-body">Monthly events</h2>
  {% for month in events.monthly %}
  <div>
    <h3>{{ month[0] }}</h3>
    <ul>
      {% for event in month[1] %}
      <li>
        <strong>{{ event.name }}</strong>: {{ event.description}}
        {% for tag in event.tags %}<sup class="badge rounded-pill text-bg-info me-1">{{tag}}</sup>{% endfor %}
        <ul>{% for link in event.links %}<li><a href="{{link.url}}">{{link.title}}</a></li>{% endfor %}</ul>
      </li>
      {% endfor %}
    </ul>
  {% endfor %}
  </div>
</div>
<div>
<h2 id="weekly-events" class="mt-5 sticky-top bg-body">Weekly events</h2>
  {% for week in events.weekly %}
  <div>
    <h3>{{ week[0] }}</h3>
    <ul>
      {% for event in week[1] %}
      <li>
        <strong>{{ event.name }}</strong>: {{ event.description}}
        {% for tag in event.tags %}<sup class="badge rounded-pill text-bg-info me-1">{{tag}}</sup>{% endfor %}
        <ul>{% for link in event.links %}<li><a href="{{link.url}}">{{link.title}}</a></li>{% endfor %}</ul>
      </li>
      {% endfor %}
    </ul>
  </div>
  {% endfor %}
</div>
