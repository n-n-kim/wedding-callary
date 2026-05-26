# Firebase setup

## 1. Create Firebase project

1. Open Firebase Console and create a project.
2. Add a Web app.
3. Copy the Firebase config values into a local `.env` file based on `.env.example`.

## 2. Enable Google sign-in

1. Go to `Authentication` -> `Sign-in method`.
2. Enable `Google`.
3. Add your production domain and local domain to `Authorized domains`.
4. If you host on Cloudflare Pages or a custom domain behind Cloudflare, add that exact domain too, for example `your-site.pages.dev` or `wedding.yourdomain.com`.

## 3. Create Firestore database

1. Go to `Firestore Database`.
2. Create the database in production mode.
3. Create a collection named `rsvps` after the first RSVP is submitted, or let the app create it automatically.

## 4. Add admin emails

1. Put bride and groom email addresses into `VITE_ADMIN_EMAILS`.
2. Separate multiple emails with commas.
3. Only those emails will see the admin RSVP list in the UI.

## 5. Firestore security rules

Use these rules so guests can only manage their own RSVP, while admin emails can read all RSVP entries:

```txt
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isSignedIn() {
      return request.auth != null;
    }

    function isAdmin() {
      return isSignedIn() &&
        request.auth.token.email in [
          "bride@gmail.com",
          "groom@gmail.com"
        ];
    }

    match /rsvps/{userId} {
      allow read: if isAdmin() || (isSignedIn() && request.auth.uid == userId);
      allow create, update: if isSignedIn() && request.auth.uid == userId;
    }
  }
}
```

Replace the example admin emails with your real Google accounts before publishing.

## 6. Local run

1. Create `.env` from `.env.example`.
2. Run `npm install` if needed.
3. Run `npm run dev`.
4. Log in with a guest Google account to test RSVP.
5. Log in with an admin email to verify the admin list appears.

## 7. Cloudflare notes

1. Firebase Google sign-in works fine with Cloudflare-hosted static sites.
2. Make sure the same public domain you use on Cloudflare is listed in Firebase `Authorized domains`.
3. Add your Firebase env vars in Cloudflare Pages `Settings` -> `Environment variables` for both preview and production if needed.
