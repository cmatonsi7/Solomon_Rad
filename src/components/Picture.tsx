import { imageUrl, imageDims } from '@/data/images';
interface Props { id: string; alt: string; className?: string; sizes?: string; priority?: boolean; position?: string }
export function Picture({ id, alt, className = '', sizes = '(min-width:1024px) 50vw, 100vw', priority, position = 'center' }: Props) {
  const [w, h] = imageDims(id);
  return (
    <img
      src={imageUrl(id, 'md')}
      srcSet={`${imageUrl(id, 'sm')} 400w, ${imageUrl(id, 'md')} 800w, ${imageUrl(id, 'lg')} 1600w`}
      sizes={sizes} alt={alt} width={w} height={h}
      loading={priority ? 'eager' : 'lazy'} decoding={priority ? 'sync' : 'async'}
      {...(priority ? { fetchPriority: 'high' as const } : {})}
      className={`object-cover ${className}`} style={{ objectPosition: position }}
    />
  );
}
