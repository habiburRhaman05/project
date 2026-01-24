"use client"
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Filter } from 'lucide-react'
import React from 'react'

const PostFilterModal = () => {
  return (
    <Dialog>
        <DialogTrigger>
          <Filter/> filter
        </DialogTrigger>

 <DialogContent>
   <DialogTitle>
      Filter your posts
   </DialogTitle>
    filters option
 </DialogContent>

    </Dialog>
  )
}

export default PostFilterModal