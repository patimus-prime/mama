import { useRef, useState } from 'react';
import { Text, Group, Button, createStyles } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone'; // MIME_TYPES removed cuz immutable
import { IconCloudUpload, IconX, IconDownload } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    marginBottom: 30,
  },

  dropzone: {
    borderWidth: 1,
    paddingBottom: 50,
  },

  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
  },

  control: {
    position: 'absolute',
    width: 250,
    left: 'calc(50% - 125px)',
    bottom: -20,
  },
}));

// JUST COMMENTED OUT ACCEPT IN THE DROPZONE, ALL GUCCI.
// const MIME_TYPES: { readonly [extension: string]: string } = {
//   pdb: 'chemical/x-pdb',
//   cif: 'chemical/x-cif',
// };
// }
// MIME_TYPES['.pdb'] = 'chemical/x-pdb';
// MIME_TYPES['.sdf'] = 'chemical/x-mdl-sdfile';
// MIME_TYPES['.mol2'] = 'chemical/x-mol2';
// MIME_TYPES['.mol'] = 'chemical/x-mdl-molfile';
// MIME_TYPES['.smi'] = 'chemical/x-daylight-smiles';
// MIME_TYPES['.smiles'] = 'chemical/x-daylight-smiles';
// MIME_TYPES['.cif'] = 'chemical/x-cif';
// MIME_TYPES['.xyz'] = 'chemical/x-xyz';
// MIME_TYPES['.pdbqt'] = 'chemical/x-pdb';
// MIME_TYPES['.sdfqt'] = 'chemical/x-mdl-sdfile';
// MIME_TYPES['.mol2qt'] = 'chemical/x-mol2';
// MIME_TYPES['.molqt'] = 'chemical/x-mdl-molfile';
// MIME_TYPES['.smiqui'] = 'chemical/x-daylight-smiles';
// MIME_TYPES['.smilesqt'] = 'chemical/x-daylight-smiles';
// MIME_TYPES['.cifqt'] = 'chemical/x-cif';

interface DropzoneButtonImprovedProps {
  onLigandContentsChange: (contents: string[]) => void;
}

export function LigandDropZone(props: DropzoneButtonImprovedProps) {
  const { classes, theme } = useStyles();
  const [isUploading, setIsUploading] = useState(false);
  const openRef = useRef<() => void>(null);
  // have the pdbcontents that we're going to pass up...
  // i guess should just be file contents...
  // since we can have .mol etc. and just a bunch of check
  // functions to see what's up
  // UPDATE: JUST USE PROPS TO MAKE AVAILABLE TO PARENT
  //   const [pdbContents, setPdbContents] = useState<string[]>([]);

  const acceptedExtensions = [
    '.pdb',
    '.sdf',
    '.mol2', // this one is obnoxiously binary, requries some if statements below
    '.mol',
    '.smi', // smiles format lol
    '.smiles',
    '.cif',
    '.xyz',
    '.pdbqt',
    '.sdfqt',
    '.mol2qt',
    '.molqt',
    '.smiqui',
    '.smilesqt',
    '.cifqt',
  ];

  const handleDrop = async (acceptedFiles: File[]) => {
    // XX SET UPLOAD TO TRUE
    // setIsUploading(true);
    const pdbFiles = acceptedFiles.filter((file) =>
      // file gotta end with SOME, really any of the above ext to be accepted
      acceptedExtensions.some((ext) => file.name.endsWith(ext))
    );

    const pdbContentPromises = pdbFiles.map((pdbFile) => {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            // if file is .mol2, convert binary data to string
            if (pdbFile.name.endsWith('.mol2')) {
              const arrayBuffer = event.target.result as ArrayBuffer;
              const decoder = new TextDecoder();
              const content = decoder.decode(arrayBuffer);
              resolve(content);
            } else {
              // for all other file types, assume it's text
              const content = event.target?.result?.toString();
              if (content) {
                resolve(content);
              } else {
                reject(new Error('Failed to read file content'));
              }
            }
          } else {
            reject(new Error('Failed to read file content'));
          }
        };
        reader.onerror = (event) => {
          reject(new Error(`Failed to read file: ${event.target?.error}`));
        };

        // read .mol2 files as binary data
        if (pdbFile.name.endsWith('.mol2')) {
          reader.readAsArrayBuffer(pdbFile);
        } else {
          // for all other file types, assume it's text
          reader.readAsText(pdbFile);
        }
      });
    });

    try {
      const pdbContents = await Promise.all(pdbContentPromises);
      //   setPdbContents(pdbContents);
      props.onPdbContentsChange(pdbContents);
      // XX insert isuploading change?
    } catch (error) {
      console.error(error);
    }
  };

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  // const file = event.target.files?.[0];
  // if (file) {
  //     const reader
  //   const handleSubmit = () => {
  // Pass the pdbContents array to the parent component
  // console.log(pdbContents);
  //   };
  //   const acceptedMimeTypes = [
  //     MIME_TYPES.txt,
  //     MIME_TYPES.mol2qt,
  //     MIME_TYPES.sdfqt,
  //   ];
  return (
    <div className={classes.wrapper}>
      <Dropzone
        openRef={openRef}
        onDrop={handleDrop}
        className={classes.dropzone}
        radius="md"
        // accept={acceptedExtensions}
        // accept={MIME_TYPES}
        // accept={acceptedExtensions.map((ext) => MIME_TYPES[ext.substring(1)])}
        maxSize={30 * 1024 ** 2}
      >
        {/* NOTE THAT DROPZONE.REJECT WILL NOT PROC WITHOUT ACCEPT= OPTION */}
        <div style={{ pointerEvents: 'none' }}>
          <Group position="center">
            <Dropzone.Accept>
              <IconDownload size={50} color={theme.colors[theme.primaryColor][6]} stroke={1.5} />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX size={50} color={theme.colors.red[6]} stroke={1.5} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconCloudUpload
                size={50}
                color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black}
                stroke={1.5}
              />
            </Dropzone.Idle>
          </Group>

          <Text align="center" weight={700} size="lg" mt="xl">
            <Dropzone.Accept>Drop your molecule files here</Dropzone.Accept>
            <Dropzone.Reject>Not a molecule, or unacceptably large file</Dropzone.Reject>
            <Dropzone.Idle>Upload molecule(s)</Dropzone.Idle>
          </Text>
          <Text align="center" size="sm" mt="xs" color="dimmed">
            Ligand(s) go here. e.g. sdf, mol2, pdb, mol, smiles, cif, xyz
          </Text>
        </div>
      </Dropzone>

      <Button className={classes.control} size="md" radius="xl" onClick={() => openRef.current?.()}>
        Select file(s)
      </Button>

      {/* <Button onClick={handleSubmit}>Submit</Button> */}
    </div>
  );
}
