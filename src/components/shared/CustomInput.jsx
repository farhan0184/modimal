import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

export default function CustomInput({ form, name, style, label, placeholder, type }) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input type={type} placeholder={placeholder}  value={field.value || ''} {...field} className={style} />
                    </FormControl>
                    
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
