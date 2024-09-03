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

<div class="btn-toolbar mb-3 sticky-top bg-body py-4" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-2" role="group" aria-label="First group">
    <a href="#monthly-events" class="btn btn-outline-secondary">Monthly</a>
    <a href="#weekly-events" class="btn btn-outline-secondary">Weekly</a>
    <a href="#ongoing-events" class="btn btn-outline-secondary">Ongoing</a>
  </div>
  <div class="input-group">
    <div class="input-group-text" id="btnGroupAddon">🔎</div>
    <input type="search" id="search-input" type="text" class="form-control" placeholder="Description or #tag">
  </div>
</div>

<div>
  <h2 id="monthly-events" class="mt-5">Monthly events</h2>
  {% for month in events.monthly %}
  <div class="result-section">
    <h3>{{ month[0] }}</h3>
      {% if month[1][0] %}
        <ul>
          {% for event in month[1] %}
          <li class="result-item">
            <strong>{{ event.name }}</strong>: {{ event.description}}
            {% for tag in event.tags %}<sup class="badge rounded-pill text-bg-info me-1">#{{tag}}</sup>{% endfor %}
            <ul>{% for link in event.links %}<li><a href="{{link.url}}">{{link.title}}</a></li>{% endfor %}</ul>
          </li>
          {% endfor %}
        </ul>
      {% else %}
        <p class="text-secondary result-item">No events.</p>
      {% endif %}    
  {% endfor %}
  </div>
</div>
<div>
<h2 id="weekly-events" class="mt-5">Weekly events</h2>
  {% for week in events.weekly %}
  <div class="result-section">
    <h3>{{ week[0] }}</h3>
      {% if week[1][0] %}
        <ul>
          {% for event in week[1] %}
          <li class="result-item">
            <strong>{{ event.name }}</strong>: {{ event.description}}
            {% for tag in event.tags %}<sup class="badge rounded-pill text-bg-info me-1">#{{tag}}</sup>{% endfor %}
            <ul>{% for link in event.links %}<li><a href="{{link.url}}">{{link.title}}</a></li>{% endfor %}</ul>
          </li>
          {% endfor %}
        </ul>
      {% else %}
        <p class="text-secondary result-item">No events.</p>
      {% endif %}    
  </div>
  {% endfor %}
<h2 id="ongoing-events" class="mt-5">Ongoing events</h2>
  <div class="result-section">
    <ul>
      {% for event in events.ongoing %}
      <li class="result-item">
        <strong>{{ event.name }}</strong>: {{ event.description}}
        {% for tag in event.tags %}<sup class="badge rounded-pill text-bg-info me-1">#{{tag}}</sup>{% endfor %}
        <ul>{% for link in event.links %}<li><a href="{{link.url}}">{{link.title}}</a></li>{% endfor %}</ul>
      </li>
      {% endfor %}
    </ul>
  </div>
</div>
