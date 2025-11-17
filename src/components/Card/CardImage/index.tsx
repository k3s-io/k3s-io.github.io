import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
interface CardImageProps {
  className?: string;
  style?: CSSProperties;
  cardImageUrl: string;
  alt: string;
  title: string;
  href?: string;
}
const CardImage: React.FC<CardImageProps> = ({
  className,
  style,
  cardImageUrl,
  alt,
  title,
  href,
}) => {
  const generatedCardImageUrl = useBaseUrl(cardImageUrl);

  const imageElement = (
    <img
      className={clsx('card__image', className)}
      style={style}
      src={generatedCardImageUrl}
      alt={alt}
      title={title}
    />
  );

  // If href is provided, wrap the image in an anchor tag
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {imageElement}
    </a>
  ) : (
    imageElement
  );
};
export default CardImage;