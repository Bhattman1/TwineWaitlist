# Twine Waitlist

A beautiful Next.js waitlist page for Twine, featuring the Young Serif font and a custom color palette.

## Features

- ✨ Modern, responsive design with custom color palette
- 📧 Email validation and form submission
- 🎨 Young Serif font integration
- 🚀 Ready for Vercel deployment
- 📱 Mobile-first responsive design

## Color Palette

The design uses a carefully selected color palette:
- **Dark Teal**: `#2D5A5A` - Primary dark color
- **Warm Yellow**: `#D4A574` - Accent color
- **Sage Green**: `#8FA68E` - Secondary color
- **Periwinkle**: `#9BA3C7` - Light accent
- **Navy Blue**: `#4A5568` - Dark accent
- **Pink**: `#E53E3E` - Primary accent (highlighted)

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Deployment on Vercel

1. **Connect your repository to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js

2. **Deploy:**
   - Vercel will automatically build and deploy your app
   - Your site will be available at `https://your-project-name.vercel.app`

3. **Custom Domain (Optional):**
   - Add your custom domain in Vercel dashboard
   - Configure DNS settings as instructed

## API Endpoints

### POST `/api/waitlist`
Handles email submissions for the waitlist.

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "message": "Successfully joined the waitlist!"
}
```

## Customization

### Adding Email Service Integration

To integrate with email services like Mailchimp, ConvertKit, or Airtable:

1. Update `/src/app/api/waitlist/route.ts`
2. Add your service credentials as environment variables
3. Implement the actual email storage logic

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add your email service API keys here
MAILCHIMP_API_KEY=your_api_key
MAILCHIMP_LIST_ID=your_list_id
```

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Young Serif (Google Fonts)
- **Deployment**: Vercel

## License

Private - All rights reserved.
