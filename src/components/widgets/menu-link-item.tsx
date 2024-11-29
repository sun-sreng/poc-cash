import { ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import { Link } from '@tanstack/react-router';
import { CSSProperties, FC } from 'react';

export type MenuLinkItemProps = {
  to?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  text: string;
  onClick?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  activeProps?: any;
  style?: CSSProperties;
};

export const MenuLinkItem: FC<MenuLinkItemProps> = ({
  to,
  icon: Icon,
  text,
  onClick,
  activeProps,
  style,
}) => {
  const content = (
    <MenuItem onClick={onClick} style={style}>
      {Icon && (
        <ListItemIcon>
          <Icon fontSize="small" />
        </ListItemIcon>
      )}
      <ListItemText>{text}</ListItemText>
    </MenuItem>
  );

  return to ? (
    <Link to={to} activeProps={activeProps}>
      {content}
    </Link>
  ) : (
    content
  );
};
