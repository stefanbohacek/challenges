---
layout: layout-main.njk
title: Home
eleventyNavigation:
  key: Home
  order: 1
---

<div class="px-4 py-5 mb-5 bg-body-tertiary rounded-bottom" style="margin-top: -8px;">
  <div class="container-fluid">
    <h1 class="text-body display-5 fw-bold">{{ site.title }}</h1>
    <p class="col-md-8 fs-5">
      Created by <a rel="me" href="https://stefanbohacek.online/@stefan">Stefan Bohacek</a>. Learn more <a href="/about/">about this project</a> or browse challenges below. 
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

<div class="btn-toolbar mb-3 sticky-top bg-body px-md-4 py-4" role="toolbar" aria-label="Toolbar with button groups">
  <div id="quicklinks" class="btn-group btn-group-sm me-2" role="group" aria-label="First group">
    <a href="#monthly-events" class="btn btn-outline-secondary">Monthly</a>
    <a href="#weekly-events" class="btn btn-outline-secondary">Weekly</a>
    <a href="#ongoing-events" class="btn btn-outline-secondary">Ongoing</a>
  </div>
  <div class="input-group mt-3 mt-md-0">
    <div class="input-group-text" id="btnGroupAddon">🔎</div>
    <input type="search" id="search-input" type="text" class="form-control" placeholder="Description or #tag">
  </div>
</div>

<div id="monthly-events" class="mt-n5 position-absolute"></div>
<div class="mt-4 px-md-4">
  <h2 class="mt-3 bg-body text-body">Monthly events</h2>
  {% for month in events.monthly %}
  <div id="month-{{ month[0] }}" class="mt-n5 position-absolute"></div>
  <div class="result-section">
    <h3 class="sticky-top text-body bg-body py-2">{{ month[0] }}</h3>
      {% if month[1][0] %}
        <ul>
          {% for event in month[1] %}
          <li class="result-item">
            <strong>{{ event.name }}</strong>: {{ event.description}}
            {% for tag in event.tags %}<sup role="button" class="tag-badge z-0 badge rounded-pill text-bg-info me-1">#{{tag}}</sup>{% endfor %}
            <ul>{% for link in event.links %}<li><a href="{{link.url}}">{{link.title}}</a></li>{% endfor %}</ul>
            <div class="mt-3">
              <add-to-calendar-button
                name="{{ event.name }}"
                description="{{ event.description}}[br]{% for link in event.links %}[br]- {{link.url}}{% endfor %}"
                location="{{ event.links[0].url }}"
                startDate="{{ event.start_date }}"
                endDate="{{ event.end_date }}"
                recurrence="yearly"
                options="'Apple', 'Google', 'iCal', 'Microsoft365', 'MicrosoftTeams', 'Outlook.com', 'Yahoo'"
                size="1"
                hideCheckmark="true"
              ></add-to-calendar-button>
            </div>
          </li>
          {% endfor %}
        </ul>
      {% else %}
        <p class="text-secondary result-item">No events.</p>
      {% endif %}
  </div>
  {% endfor %}
</div>
<div id="weekly-events" class="mt-n5 position-absolute"></div>
<div>
<h2 class="mt-5 text-body bg-body">Weekly events</h2>
  {% for week in events.weekly %}
  <div id="day-{{ week[0] }}" class="mt-n5 position-absolute"></div>
  <div class="result-section">
    <h3 class="sticky-top text-body bg-body py-2">{{ week[0] }}</h3>
      {% if week[1][0] %}
        <ul>
          {% for event in week[1] %}
          <li class="result-item">
            <strong>{{ event.name }}</strong>: {{ event.description}}
            {% for tag in event.tags %}<sup role="button" class="tag-badge z-0 badge rounded-pill text-bg-info me-1">#{{tag}}</sup>{% endfor %}
            <ul>{% for link in event.links %}<li><a href="{{link.url}}">{{link.title}}</a></li>{% endfor %}</ul>
            <div class="mt-3">
              <add-to-calendar-button
                name="{{ event.name }}"
                description="{{ event.description}}[br]{% for link in event.links %}[br]- {{link.url}}{% endfor %}"
                location="{{ event.links[0].url }}"
                startDate="{{ event.start_date }}"
                endDate="{{ event.end_date }}"
                recurrence="weekly"
                options="'Apple', 'Google', 'iCal', 'Microsoft365', 'MicrosoftTeams', 'Outlook.com', 'Yahoo'"
                size="1"
                hideCheckmark="true"
              ></add-to-calendar-button>
            </div>
          </li>
          {% endfor %}
        </ul>
      {% else %}
        <p class="text-secondary result-item">No events.</p>
      {% endif %}    
  </div>
  {% endfor %}
<div id="ongoing-events" class="mt-n5 position-absolute"></div>
<h2 class="mt-5 text-body">Ongoing events</h2>
  <div class="result-section">
    <ul>
      {% for event in events.ongoing %}
      <li class="result-item">
        <strong>{{ event.name }}</strong>: {{ event.description}}
        {% for tag in event.tags %}<sup role="button" class="tag-badge z-0 badge rounded-pill text-bg-info me-1">#{{tag}}</sup>{% endfor %}
        <ul>{% for link in event.links %}<li><a href="{{link.url}}">{{link.title}}</a></li>{% endfor %}</ul>
      </li>
      {% endfor %}
    </ul>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button@2" async defer></script>
