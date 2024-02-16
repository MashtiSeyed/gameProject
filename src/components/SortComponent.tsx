import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";


interface Props {
    onSelectSortOrder: (sortItem: string) => void;
    selectedOrder: string;
}


const SortComponent = ({onSelectSortOrder, selectedOrder}:Props) => {
    const SortOrder = [
        {value: '', label: 'Relevance'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Last Released'},
        {value: '-metacritic', label: 'Metacritic'},
        {value: '-added', label: 'Last Added'},
        {value: '-rating', label: 'Rating'},
    ] 


    const currentOrder = SortOrder.find(s => s.value === selectedOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<Icon as={ChevronDownIcon} />}>
        Ordered By: {currentOrder?.label || "Relevance"}
      </MenuButton>{" "}
      <MenuList>
            {SortOrder.map(order => <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default SortComponent;
