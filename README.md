# Device Info Website

This repository contains the static showcase website and privacy policy page for the Android app `Device Info`.

## Purpose

The site (sections: Overview, Features, In The App, Privacy, Contact) is intended to support the Google Play listing and give users a simple place to:

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

The privacy page is written to match Device Info `v9.0.0` (Android 9 / API 28 and newer) and includes:

- Firebase Analytics, release-build Crashlytics and Performance Monitoring, and Remote Config
- the opt-in public IP lookup (the app's only outbound request of its own)
- Health Score, Weekly Digest, automatic checkups, Battery Doctor, Charger test, Benchmark and Storage & Specs
- Inspection Certificate (Keystore signing, Key Attestation), Guided Inspection, Compare phones and QR scanning
- Privacy & Security, App Analyzer, Developer Tools and installed-app visibility
- Wi-Fi Analyzer, Data Usage, Floating Monitor and Session Reports
- App Lock, Android Auto Backup rules and the password-protected backup file
- Saved reports, PDF export, Share My Phone and six home-screen widgets
- advertising-ID permission removal
- permission-by-permission justification for the current manifest

## Updating Content

When the Android app changes, review these areas:

1. `index.html`
   Update feature text, the current product map, and store links. Source of truth: the app repo's root `README.md` and `docs/play-store-listing.md`.
2. `privacy_policy.html`
   Update permissions, Firebase usage, local storage and backup behavior, exports, widgets, update
   flow, security analysis, and contact details.
3. `style.css`
   Keep colors aligned with the Android app theme.

## Assets and Icons

Branding assets are kept in the repository so they can be used later if needed.

Important assets:

- `assets/app_icon.png`
- `assets/app_icon_whiteBg.png`

## Local Preview

You can preview the site by opening `index.html` directly in a browser or by serving the directory with any static file server.
