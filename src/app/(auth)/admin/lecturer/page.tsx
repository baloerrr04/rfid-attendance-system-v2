"use client";

import { Loader2, PlusCircle, Search } from "lucide-react";
import { DataTable } from "../_components/data-table";
import { Button } from "@/components/ui/button";
import { FormDialog } from "./_components/form-dialog";
import { ConfirmDialog } from "@/app/(auth)/admin/_components/confirm-dialog";
import { UseLecturePage } from "./use-lecture-page";
import { Header } from "../_components/header";
import { Input } from "@/components/ui/input";

export default function lecturer() {
  const {
    columns,
    data,
    loading,
    setOpenForm,
    openForm,
    handleChange,
    handleSubmit,
    formData,
    setOpenConfirm,
    openConfirm,
    handleDelete,
    searchQuery,
    setSearchQuery,
  } = UseLecturePage();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="animate-spin w-6 h-6" />
        <span className="ml-2">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-background">
      <div className="p-4 flex-1 flex flex-col">
        <Header title="Data Dosen" />
        <div className="flex justify-between py-4">
          <div className="flex items-center gap-2 mb-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Cari dosen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md"
            />
          </div>
          <Button onClick={() => setOpenForm(true)}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Tambah Dosen
          </Button>
        </div>
        <DataTable columns={columns} data={data} />

        <FormDialog
          open={openForm}
          onOpenChange={setOpenForm}
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />

        <ConfirmDialog
          open={openConfirm}
          onOpenChange={setOpenConfirm}
          onConfirm={handleDelete}
        />
      </div>
    </div>
  );
}
