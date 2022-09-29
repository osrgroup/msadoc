import { CenterFocusStrongOutlined } from '@mui/icons-material';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { GetServiceDocResponse } from 'msadoc-client';
import React from 'react';
import { generatePath, useMatch, useNavigate } from 'react-router-dom';

import { GROUPS_TREE_ROUTES_ABS } from '../../../../routes';

interface Props {
  service: GetServiceDocResponse;

  /**
   * How deep is this item in the tree?
   * This value is especially used to properly indent the item.
   */
  depth: number;
}
export const ServiceItem: React.FC<Props> = (props) => {
  const controller = useController(props);

  return (
    <ListItemButton
      sx={{
        pl: props.depth * 4,
        background: (theme) =>
          controller.isSelected ? theme.palette.primary.main : undefined,
        color: (theme) =>
          controller.isSelected
            ? theme.palette.primary.contrastText
            : undefined,
        '&:hover': {
          background: (theme) =>
            controller.isSelected ? theme.palette.primary.main : undefined,
          color: (theme) =>
            controller.isSelected
              ? theme.palette.primary.contrastText
              : undefined,
        },
      }}
      onClick={(): void => controller.navigateToThisService()}
    >
      <ListItemIcon sx={{ color: 'inherit' }}>
        <CenterFocusStrongOutlined />
      </ListItemIcon>
      <ListItemText primary={props.service.name} />
    </ListItemButton>
  );
};

interface Controller {
  isSelected: boolean;

  navigateToThisService: () => void;
}
function useController(props: Props): Controller {
  const navigate = useNavigate();
  const routeMatch = useMatch(GROUPS_TREE_ROUTES_ABS.service);

  const isSelected = ((): boolean => {
    if (!routeMatch) {
      return false;
    }
    if (routeMatch.params.service !== props.service.name) {
      return false;
    }
    return true;
  })();

  return {
    isSelected: isSelected,

    navigateToThisService: (): void => {
      navigate(
        generatePath(GROUPS_TREE_ROUTES_ABS.service, {
          service: props.service.name,
        }),
      );
    },
  };
}
