# Device Info Website

This repository contains the static showcase website and privacy policy page for the Android app `Device Info`.

## Purpose

The site is intended to support the Google Play listing and give users a simple place to:

- understand what the app does
- view branding and policy information
- open the privacy policy
- find support contact details

## Files

- `index.html`: main product showcase page
- `privacy_policy.html`: privacy policy and permission justification page
- `style.css`: shared styling for both pages
- `main.js`: mobile navigation and footer year
- `assets/`: branding images, app icons, and supporting media

## Theme

The website styling mirrors the Android app color system defined in `DeviceInfoUiColors`:

- dark palette by default
- light palette through `prefers-color-scheme`
- accent colors based on the app's green brand color

## Privacy Policy Coverage

The privacy page is written to match the current app direction and includes:

- Firebase Analytics
- Firebase Crashlytics
- Firebase Remote Config
- local diagnostics persistence
- installed-app visibility explanation
- permission-by-permission justification for the current manifest

## Updating Content

When the Android app changes, review these areas:

1. `index.html`
   Update feature text and store links.
2. `privacy_policy.html`
   Update permissions, Firebase usage, local storage behavior, and contact details.
3. `style.css`
   Keep colors aligned with the Android app theme.

## Assets and Icons

Branding assets are kept in the repository so they can be used later if needed.

Important assets:

- `assets/app_icon.png`
- `assets/app_icon_whiteBg.png`

## Local Preview

You can preview the site by opening `index.html` directly in a browser or by serving the directory with any static file server.
