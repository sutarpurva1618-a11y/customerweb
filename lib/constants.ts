const WHATSAPP_MESSAGE = "Hello, I'd like to explore property options with Dwarka-real.estate.";

const OWNER = {
  name: 'Kaustubh Nitin Sutar',
  brand: 'Dwarka-real.estate',
  phone: '+91 93171 51393',
  phoneRaw: '919317151393',
  whatsapp: `https://wa.me/919317151393?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  tel: 'tel:+919317151393',
  instagram: 'https://www.instagram.com/dwarkarealtors_/',
  instagramHandle: '@dwarkarealtors_',
};

const PROPERTY_TYPES = [
  'Flat / Apartment',
  'Villa',
  'Bungalow',
  'Plot / Land',
  'Commercial',
  'Other',
] as const;

const LISTING_TYPES = ['Buy', 'Rent'] as const;

const BHK_OPTIONS = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '4+ BHK', 'Not Sure', 'N/A'] as const;

const HERO_IMAGE =
  'https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&w=1920';

const CATEGORY_IMAGES: Record<string, string> = {
  Residential:
    'https://images.pexels.com/photos/15951714/pexels-photo-15951714.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Plots & Land':
    'https://images.pexels.com/photos/15422584/pexels-photo-15422584.jpeg?auto=compress&cs=tinysrgb&w=800',
  Commercial:
    'https://images.pexels.com/photos/11861957/pexels-photo-11861957.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Custom Requirement':
    'https://images.pexels.com/photos/8134781/pexels-photo-8134781.jpeg?auto=compress&cs=tinysrgb&w=800',
};

const ABOUT_IMAGE =
  'https://images.pexels.com/photos/8134819/pexels-photo-8134819.jpeg?auto=compress&cs=tinysrgb&w=800';

export {
  OWNER,
  PROPERTY_TYPES,
  LISTING_TYPES,
  BHK_OPTIONS,
  HERO_IMAGE,
  CATEGORY_IMAGES,
  ABOUT_IMAGE,
};
