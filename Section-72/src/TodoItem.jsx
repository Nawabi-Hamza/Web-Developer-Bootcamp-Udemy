import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoItem({ todo, removeTodo, toggle }){
    const labelId = `checkbox-list-label-${todo.id}`;
    return (
        <ListItem secondaryAction={
            <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
              <DeleteIcon />
            </IconButton>
          } disablePadding >
                {/* <ListItemButton role={undefined} onClick={handleToggle(todo.id)} dense> */}
                <ListItemButton role={undefined} dense>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={todo.completed}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                            onChange={toggle}
                        />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={todo.text} />
                </ListItemButton>
               
        </ListItem>
    )
}